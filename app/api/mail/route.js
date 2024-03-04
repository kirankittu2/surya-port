import nodemailer from "nodemailer";

export async function POST(request) {
  const data = await request.json();
  console.log(data);
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "kirankittu3760@gmail.com",
      pass: "rqdt mvrq ywnd zwzm",
    },
  });
  // Compose email
  const mailOptions = {
    from: "kirankittu3760@gmail.com",
    to: "kirankittu3760@gmail.com",
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
