const { sendEmail } = require("../../../config/nodemailer");

export async function POST(req: any) {
  const { name, email, subject, message } = await req.json();

  if (!name || !email || !subject || !message) {
    return new Response(
      JSON.stringify({ message: "Please fill all the details" }),
      { status: 400 },
    );
  }

  const result = await sendEmail({ name, email, subject, message }); //using nodemailer to send email

  if (result.success) {
    return new Response(JSON.stringify({ message: result.message }), {
      status: 200,
    });
  } else {
    return new Response(JSON.stringify({ message: result.message }), {
      status: 400,
    });
  }
}
