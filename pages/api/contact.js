import nodemailer from "nodemailer";

export default async function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const {
    firstName,
    lastName,
    phone,
    email,
    location,
    deviceType,
    problem,
  } = req.body || {};

  if (!firstName || !lastName || !phone || !email || !problem) {
    return res.status(400).json({ message: "Missing required fields." });
  }

  try {

    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: `"Website Contact Form" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      replyTo: email,
      subject: `New Repair Request – ${firstName} ${lastName}`,
      html: `
        <h2>New Website Repair Request</h2>

        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Location / ZIP:</strong> ${location || "-"}</p>
        <p><strong>Device Type:</strong> ${deviceType || "-"}</p>

        <h3>Problem Description</h3>
        <p>${problem}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({ message: "Email sent successfully" });

  } catch (error) {
    console.error("EMAIL ERROR:", error);
    return res.status(500).json({ message: "Email sending failed" });
  }
}