import nodemailer from "nodemailer";

export async function POST(request) {
  const data = await request.json();
  console.log(data);
  const transporter = nodemailer.createTransport({
    host: "smtp.office365.com",
    port: 587,
    secure: false,
    auth: {
      user: "saisurya.teja@outlook.com",
      pass: "qspqphrpkhycirty",
    },
  });
  // Compose email
  const mailOptions = {
    from: "saisurya.teja@outlook.com",
    to: "saisurya.teja@outlook.com",
    subject: "New Form Submission",
    text: `Name:${data.name}, Email: ${data.mail} Type of service: ${data.service}`,
  };
  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return new Response(JSON.stringify({ message: false }));
    }
    return new Response(JSON.stringify({ message: true }));
  });
  return new Response(JSON.stringify({ message: true }));
}
