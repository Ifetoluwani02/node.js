const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SENDER_EMAIL,
    pass: "bikj wxew xqzz oyse",
  },
});

const mailOptions = {
  from: "senderemail@gmail.com",
  to: "receivermail@gmail.com",
  subject: "Test Email",
  text: "Hey, you have been hacked",
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log("Email sent: " + info.response);
});
