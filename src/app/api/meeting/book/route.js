import { createMeetingEvent } from "@/lib/google/calendar";
import { sendMeetingConfirmationEmails } from "@/lib/email/meetingEmails";

export const runtime = "nodejs";

export async function POST(request) {
  try {
    const body = await request.json();
    const firstName = String(body.firstName || body.firstname || "").trim();
    const lastName = String(body.lastName || body.lastname || "").trim();
    const email = String(body.email || "").trim().toLowerCase();
    const phone = String(body.phone || "").trim();
    const scheduledTime = String(
      body.scheduledTime || body.date || "",
    ).trim();

    if (!scheduledTime || !firstName || !lastName || !email) {
      return Response.json(
        { success: false, error: "Required fields are missing." },
        { status: 400 },
      );
    }

    const meeting = await createMeetingEvent({
      scheduledTime,
      firstName,
      lastName,
      email,
      phone,
    });

    try {
      await sendMeetingConfirmationEmails({
        firstName,
        lastName,
        email,
        phone,
        meetLink: meeting.meetLink,
        startDateTime: meeting.startDateTime,
        timeZone: meeting.timeZone,
      });
    } catch (emailError) {
      console.error("Meeting email error:", emailError?.message || emailError);
    }

    return Response.json({
      success: true,
      message: "Meeting confirmed! Check your email for the Google Meet link.",
      joinUrl: meeting.joinUrl,
      meetLink: meeting.meetLink,
      startTime: scheduledTime,
      eventLink: meeting.htmlLink,
    });
  } catch (error) {
    console.error("Meeting booking error:", error?.message || error);

    return Response.json(
      {
        success: false,
        error:
          error?.message ||
          "Unable to book the meeting right now. Please try again.",
      },
      { status: 500 },
    );
  }
}
