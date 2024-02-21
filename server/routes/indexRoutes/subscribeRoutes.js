import { Subscriptions } from "#schemas/subscriptions.js";
import { sendEmail } from "#helpers/sendEmail.js";

async function subscribe(req, res) {
  try {
    const { email } = req.body;
    const subscription = await Subscriptions.findOne({ email: email });
    if (subscription) {
      await Subscriptions.deleteOne({ email: email });
      return res.status(200).json({
        message: "You have unsubscribed from the newsletter",
        email: email,
      });
    }
    await Subscriptions.create({ email: email });
    await sendEmail(
      email,
      "Yumtastic Creations Newsletter",
      "You have subscribed to the Yumtastic Creations newsletter! Thanks for your trust!"
    );
    return res.status(201).json({
      message:
        "You have subscribed to the newsletter, check your email for confirmation",
      email: email,
    });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}

export { subscribe };
