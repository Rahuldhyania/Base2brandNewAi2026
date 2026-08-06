function getApiBase() {
  return (
    process.env.NEXT_LOCAL_API_URL ||
    process.env.NEXT_PUBLIC_LOCAL_API_URL ||
    "http://localhost:5000/api"
  );
}

function getMeetingEnquiryPath() {
  return (
    process.env.MEETING_ENQUIRY_PATH ||
    process.env.MEETING_ENQUIRY_ENDPOINT ||
    "forms/schedule-call"
  ).replace(/^\/+/, "");
}

export async function saveMeetingEnquiry({
  firstName,
  lastName,
  email,
  phone,
  scheduledTime,
  meetLink,
  eventLink,
}) {
  const response = await fetch(`${getApiBase()}/${getMeetingEnquiryPath()}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      firstName,
      lastName,
      firstname: firstName,
      lastname: lastName,
      email,
      phone: phone || "",
      scheduledTime,
      meetLink: meetLink || "",
      joinUrl: meetLink || "",
      eventLink: eventLink || "",
      status: "new",
    }),
  });

  const result = await response.json().catch(() => ({}));

  if (!response.ok || result.success === false) {
    throw new Error(result.message || "Failed to save meeting enquiry.");
  }

  return result;
}
