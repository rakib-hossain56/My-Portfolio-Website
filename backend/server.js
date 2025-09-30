import express from "express";
import bodyParser from "body-parser";
import nodemailer from "nodemailer";
import 'dotenv/config';
import cors from "cors";

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Gmail SMTP Transport তৈরি করা
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SENDER_EMAIL,   // আপনার Gmail
    pass: process.env.SENDER_PASSWORD,     // App password (Google থেকে নিতে হবে)
  },
});

app.post("/send-mail", async (req, res) => {
  const { name, email, subject, comment } = req.body;

  const mailOptions = {
    from: email, // user er email
    to: process.env.SENDER_EMAIL, // আপনার Gmail
    subject: subject,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${comment}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to send message." });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
