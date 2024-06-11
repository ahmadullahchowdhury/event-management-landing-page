import nodemailer from "nodemailer";

const email = process.env.NODEMAILER_EMAIL;
const pass = process.env.NODEMAILER_PASSWORD;
const emailSendTO = process.env.CONTACT_EMAIL_SENDTO

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass,
  },
});


export const mailOptions = {
  from: emailSendTO,
  to: emailSendTO,
};
