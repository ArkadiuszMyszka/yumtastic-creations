import { send } from "#config/nodemailer.js";

export const sendEmail = async (email, subject, text) => {
  const mailOptions = {
    from: "yumtasticcreations@gmail.com",
    to: email,
    subject: subject,
    text: text,
  };
  try {
    await send(mailOptions);
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};
