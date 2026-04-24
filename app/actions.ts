'use server'
import { Resend } from 'resend';

// O Next.js puxa automaticamente a chave da Vercel
const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  // Pegando todos os dados exatamente como definimos no "name" do formulário
  const firstName = formData.get('firstName') as string;
  const lastName = formData.get('lastName') as string;
  const email = formData.get('email') as string;
  const organization = formData.get('organization') as string;
  const message = formData.get('message') as string;

  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev', // DEIXE ASSIM no plano grátis inicial
      to: 'antenor@antenor.com.br', // COLOQUE SEU E-MAIL AQUI
      subject: `Novo contato: ${firstName} ${lastName}`, // <--- CORRIGIDO AQUI
      html: `
        <div style="font-family: sans-serif; line-height: 1.5; color: #333;">
          <h2>Você recebeu uma nova mensagem do site! 🚀</h2>
          <hr />
          <p><strong>👤 Nome:</strong> ${firstName} ${lastName}</p>
          <p><strong>🏢 Organização:</strong> ${organization || 'Não informada'}</p>
          <p><strong>📧 E-mail do cliente:</strong> ${email}</p>
          <hr />
          <h3>Mensagem:</h3>
          <p style="background: #f4f4f4; padding: 15px; border-radius: 5px;">
            ${message}
          </p>
        </div>
      `
    });
    
    return { success: true };
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
    return { success: false };
  }
}
