"use server";

import nodemailer from "nodemailer";

export async function sendMail(formdata) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
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
    text: `Email: ${formdata.get("mail")}`,
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send("Error sending email");
    }
    res.send("Email sent successfully");
  });
}
