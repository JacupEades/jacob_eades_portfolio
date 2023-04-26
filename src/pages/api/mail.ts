const mail = require("@sendgrid/mail");
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  status: string;
};

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default function mailForm(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const body = JSON.parse(req.body);

  const message = `
  Email: ${body.email}\r\n
  Subject: ${body.subject}\r\n
  Message: ${body.message}
  `;

  const data = {
    to: "jacob.eades@eadeselectric.com",
    from: "jep_connect_form@eadeselectric.com",
    subject: body.subject,
    text: message,
    html: message.replace(/\r\n/g, "<br>"),
  };

  mail.send(data);

  // console.log(body)
  res.status(200).json({ status: "OK" });
}
//
