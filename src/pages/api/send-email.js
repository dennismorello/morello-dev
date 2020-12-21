import { sendEmail } from "../../services/email";

export default async (request, response) => {
  if (request.method === "POST") {
    const { senderEmail, senderName, subject, message } = request.body;

    const emailResponse = await sendEmail({
      apiKey: process.env.SENDGRID_API_KEY,
      senderEmail,
      senderName,
      subject,
      message,
    });

    return response.status(emailResponse.status).end();
  }

  return response.status(405).json({
    error: {
      code: 405,
      message: "The requested endpoint does not support this method",
    },
  });
};
