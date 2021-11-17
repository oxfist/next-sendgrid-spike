import sendMail from '../../lib/sendMail'

export default function handler(req, res) {
  sendMail(res)
}
