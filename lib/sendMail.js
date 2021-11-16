import sendGrid from '@sendgrid/mail'

sendGrid.setApiKey(process.env.SENDGRID_API_KEY)

const message = {
  to: 'hola@taier.cl',
  from: 'hola@taier.cl',
  subject: 'Enviando correo de prueba desde spike de SengGrid',
  text: 'Este debería ser el cuerpo del correo',
  html: '<strong>esto va en negrita</strong>',
}

const sendMail = async () => {
  try {
    await sendGrid.send(message)
  } catch (error) {
    console.error(error)

    if (error.response) {
      console.error(error.response.body)
    }
  }
}

export default sendMail
