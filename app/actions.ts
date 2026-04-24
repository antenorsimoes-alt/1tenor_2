'use server'
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  const name = formData.get('firstName'); // Verifique se o name no input é este mesmo
  const emailInput = formData.get('email') as string;
  const message = formData.get('message');

  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev', // DEIXE ASSIM no plano grátis inicial
      to: 'antenor@antenor.com.br', // COLOQUE SEU E-MAIL AQUI
      subject: `Novo contato: ${name}`,
      html: `
        <h3>Você recebeu uma nova mensagem do site:</h3>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>E-mail do cliente:</strong> ${emailInput}</p>
        <p><strong>Mensagem:</strong> ${message}</p>
      `
    });
    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false };
  }
}
