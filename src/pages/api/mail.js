import mail from "@sendgrid/mail"
import {v4 as uniqueIdentifier} from "uuid"

mail.setApiKey(process.env.SENDGRID_API_KEY)

export default function handler(req, res) {
  const formObject = JSON.parse(req.body)
  const lines = Object.entries(formObject).map(obj => {
    return `
      <strong>${obj[0]}</strong>: ${obj[1]}<br/>
    `
  })
  let message = ""
  lines.forEach(line => message+=line)

  const subject = `${formObject.subject} ID#${uniqueIdentifier()}`;
  const text = JSON.stringify(formObject);
  const html = message

  const data = {
    to: 'guinchodemoto.recebe@gmail.com',
    from: 'nicolasarths.sender@gmail.com',
    subject,
    text,
    html
  }

  try {
    mail.send(data)
  } catch (error) {
    console.log(error)
  }
  
  
  res.status(200).json({ status: 'Ok' })
}