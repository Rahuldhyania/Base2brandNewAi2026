import { google } from "googleapis";

const TIME_ZONE = "Asia/Kolkata";
const MEETING_DURATION_MINUTES = 30;

function getPrivateKey() {
  const key = process.env.GOOGLE_PRIVATE_KEY || "";
  return key.replace(/\\n/g, "\n");
}

function getOAuthClient() {
  const client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    process.env.GOOGLE_REDIRECT_URI,
  );

  client.setCredentials({
    refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
  });

  return client;
}

function getServiceAccountAuth() {
  return new google.auth.JWT({
    email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    key: getPrivateKey(),
    scopes: ["https://www.googleapis.com/auth/calendar"],
    subject: process.env.GOOGLE_CALENDAR_ID,
  });
}

async function getCalendarClient() {
  if (process.env.GOOGLE_REFRESH_TOKEN) {
    return google.calendar({ version: "v3", auth: getOAuthClient() });
  }

  if (
    process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL &&
    process.env.GOOGLE_PRIVATE_KEY
  ) {
    const auth = getServiceAccountAuth();
    await auth.authorize();
    return google.calendar({ version: "v3", auth });
  }

  throw new Error("Google Calendar credentials are not configured.");
}

function normalizeDateTime(value) {
  const trimmed = String(value || "").trim();
  if (!trimmed) return "";
  if (trimmed.length === 16) return `${trimmed}:00`;
  return trimmed;
}

function addMinutesToDateTime(dateTime, minutes) {
  const date = new Date(dateTime);
  date.setMinutes(date.getMinutes() + minutes);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hour = String(date.getHours()).padStart(2, "0");
  const minute = String(date.getMinutes()).padStart(2, "0");

  return `${year}-${month}-${day}T${hour}:${minute}:00`;
}

function extractMeetLink(event) {
  return (
    event.hangoutLink ||
    event.conferenceData?.entryPoints?.find(
      (entry) => entry.entryPointType === "video",
    )?.uri ||
    null
  );
}

export async function createMeetingEvent({
  scheduledTime,
  firstName,
  lastName,
  email,
  phone,
}) {
  const calendar = await getCalendarClient();
  const calendarId = process.env.GOOGLE_CALENDAR_ID || "primary";
  const fullName = `${firstName} ${lastName}`.trim();
  const startDateTime = normalizeDateTime(scheduledTime);
  const endDateTime = addMinutesToDateTime(startDateTime, MEETING_DURATION_MINUTES);
  const requestId = `b2b-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;

  const selectedTime = new Date(startDateTime);
  if (Number.isNaN(selectedTime.getTime()) || selectedTime <= new Date()) {
    throw new Error("Please select a future date and time.");
  }

  const { data } = await calendar.events.insert({
    calendarId,
    conferenceDataVersion: 1,
    sendUpdates: "all",
    requestBody: {
      summary: `Base2Brand Call — ${fullName}`,
      description: [
        "Meeting booked via Base2Brand website.",
        `Name: ${fullName}`,
        `Email: ${email}`,
        `Phone: ${phone || "Not provided"}`,
      ].join("\n"),
      start: {
        dateTime: startDateTime,
        timeZone: TIME_ZONE,
      },
      end: {
        dateTime: endDateTime,
        timeZone: TIME_ZONE,
      },
      attendees: [{ email }, { email: calendarId }],
      conferenceData: {
        createRequest: {
          requestId,
          conferenceSolutionKey: { type: "hangoutsMeet" },
        },
      },
    },
  });

  return {
    eventId: data.id,
    meetLink: extractMeetLink(data),
    joinUrl: extractMeetLink(data),
    htmlLink: data.htmlLink,
    startDateTime,
    endDateTime,
    timeZone: TIME_ZONE,
  };
}
