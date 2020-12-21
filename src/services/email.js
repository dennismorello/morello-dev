import assert from "assert";

export const sendEmail = async ({
  apiKey,
  senderEmail,
  senderName,
  subject,
  message,
}) => {
  assert(apiKey, "SendGrid API key not provided");

  const mailData = {
    personalizations: [{ to: [{ email: "dennis@morello.dev" }] }],
    from: { email: senderEmail, name: senderName },
    subject,
    content: [{ type: "text/plain", value: message }],
  };

  return fetch("https://api.sendgrid.com/v3/mail/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify(mailData),
  });
};
