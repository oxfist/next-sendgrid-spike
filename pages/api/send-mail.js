import sendMail from '../../lib/sendMail'

export default function handler(req, res) {
  const mailResponse = sendMail()
  res.status(200).json({ data: mailResponse })
}
