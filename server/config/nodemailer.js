import nodemailer from "nodemailer";

const config = {
  host: "smtp.mailgun.org",
  port: 587,
  auth: {
    user: process.env.MAILGUN_USERNAME,
    pass: process.env.MAILGUN_PASSWORD,
  },
};

const transport = nodemailer.createTransport(config);

export const send = (mailOptions) => {
  transport.sendMail(mailOptions).catch((err) => console.log(err.response));
};
