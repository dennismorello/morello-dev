import { sendEmail } from "../../../services/email";

export default async (request, response) => {
  if (request.method === "POST") {
    const { sender_email, sender_name, subject, message } = request.body;

    await sendEmail({
      apiKey: process.env.SENDGRID_API_KEY,
      senderEmail: sender_email,
      senderName: sender_name,
      subject,
      message,
    });

    return response.redirect(request.headers.referer);
  }

  return response.status(405).json({
    error: {
      code: 405,
      message: "The requested endpoint does not support this method",
    },
  });
};
