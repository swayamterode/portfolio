import nodemailer from "nodemailer";
import { ApiResponse } from "@/utils/ApiResponse";

export interface Params {
  from: string | undefined;
  to: string | undefined;
  subject: string;
  html: string;
}

export async function sendEmail({ from, to, subject, html }: Params) {
  // Create a SMTP transporter object
  const transporter = nodemailer.createTransport({
    service: "gmail", // use your email service
    auth: {
      user: process.env.NEXT_PUBLIC_GMAIL_USER,
      pass: process.env.NEXT_PUBLIC_GMAIL_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false, // do not fail on invalid certs
    },
  });

  const mailOptions = {
    from,
    to,
    subject,
    html,
  };

  try {
    const info = await transporter.sendMail(mailOptions);

    if (info.accepted.length === 0) {
      return ApiResponse(500, "Error: Could not send email");
    }

    return ApiResponse(200, "Email sent successfully"); // Return success message
  } catch (error) {
    return ApiResponse(500, "Error: Could not send email");
  }
}
