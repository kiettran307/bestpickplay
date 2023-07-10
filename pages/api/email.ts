import { NextApiRequest, NextApiResponse } from "next";
import * as nodemailer from "nodemailer";
const authAdmin = {
  email: "tva19991604@gmail.com",
  pass: "azewfgvzfpaskliz",
};
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: authAdmin.email,
        pass: authAdmin.pass
    }
  });

  const { name, email, message } = req.body;

  if (!message || !email) {
    return res
      .status(400)
      .json({ message: "Please fill out the necessary fields" });
  }

  // https://nodemailer.com/message/#common-fields
  const mailData = {
    from: email,
    to: authAdmin.email,
    subject: `Message from ${name || email}`,
    text: `${message} | Sent from: ${email}`,
    html: `<div>${message}</div><p>Sent from: ${email}</p>`,
  };

  await new Promise((resolve, reject) => {
    transporter.sendMail(mailData, (err: Error | null, info) => {
      if (err) {
        reject(err);
        return res
          .status(500)
          .json({ error: err.message || "Something went wrong" });
      } else {
        resolve(info.accepted);
        res.status(200).json({ message: "Message sent!", body: req.body });
      }
    });
  });

  return;
};

export default handler;
