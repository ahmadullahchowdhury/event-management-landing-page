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

// export const transporter = nodemailer.createTransport({
//   host: "sandbox.smtp.mailtrap.io",
//   port: 2525,
//   auth: {
//     user: "eff966ebc2cc04",
//     pass: "5b1ac8e9e26409"
//   }
// });

// export const transporter = nodemailer.createTransport({
//   host: "mail.stacksages.com",
//   port: 465,
//   secure: true,
//   auth: {
//     user: "testingsmtp@stacksages.com",
//     pass: "testingsmtp"
//   }
// });

export const mailOptions = {
  from: emailSendTO,
  to: emailSendTO,
};
