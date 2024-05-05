const nodemailer = require("nodemailer");

async function sendEmail({ name, email, subject, message }) {
  // Create a SMTP transporter object
  const transporter = nodemailer.createTransport({
    service: "gmail", // use your email service
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false, // do not fail on invalid certs
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.GMAIL_USER,
    subject: subject,
    html: `<p>This message is sent by ${email} and has some message for you: ${message}</p>`, // Change this HTML Later!!!
  };

  try {
    const info = await transporter.sendMail(mailOptions); // Send the email
    return { success: true, message: "Email sent successfully" }; // Return success message
  } catch (error) {
    return { success: false, message: "Error: Could not send email" }; // Return error message
  }
}

module.exports = { sendEmail }; // Export the function
