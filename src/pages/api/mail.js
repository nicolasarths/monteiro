import mail from "@sendgrid/mail"
import {v4 as uniqueIdentifier} from "uuid"

mail.setApiKey(process.env.SENDGRID_API_KEY)

export default async function handler(req, res) {
  const formObject = JSON.parse(req.body)
  
  let message = `
    Mensagem de <strong>${formObject.nome}</strong>. <br/>
    Telefone para contato: <strong>${formObject.telefone}</strong>.<br/>
    <br/>
    <strong>Mensagem:</strong><br/>
    ${formObject.mensagem}
  `

  const subject = `Mensagem de ${formObject.nome} - ID #${uniqueIdentifier()}`;
  const text = JSON.stringify(formObject);
  const html = message

  const data = {
    to: 'volneimonteirors@hotmail.com',
    from: 'admin@nicolasarths.com.br',
    subject,
    text,
    html
  }

  try {
    const [response, string] = await mail.send(data)
    if (response.statusCode > 199 && response.statusCode < 300) res.status(200).json({status: 'Ok'})
    else res.status(500).json({ status: 'Fail' })
  } catch (error) {
    console.log(error)
    res.status(500).json({ status: 'Fail' })
  }
  
  
}