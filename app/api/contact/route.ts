import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      email,
      message,
      locale,
    } = body;

    // Validação dos campos obrigatórios
    if (
      !name?.trim() ||
      !email?.trim() ||
      !message?.trim()
    ) {
      return NextResponse.json(
        {
          error:
            "Preencha todos os campos obrigatórios.",
        },
        {
          status: 400,
        },
      );
    }

    // Define o idioma do e-mail
    const isEnglish = locale === "en";

    const emailSubject = isEnglish
      ? `New portfolio contact from ${name}`
      : `Novo contato pelo portfólio de ${name}`;

    const emailResponse =
      await resend.emails.send({
        from:
          "Portfolio <onboarding@resend.dev>",

        to: [
          "sartorhenn@gmail.com",
        ],

        replyTo: email,

        subject: emailSubject,

        html: `
          <div
            style="
              font-family: Arial, sans-serif;
              max-width: 680px;
              margin: 0 auto;
              padding: 32px;
              color: #111;
            "
          >

            <h1
              style="
                font-size: 24px;
                margin-bottom: 24px;
              "
            >
              ${
                isEnglish
                  ? "New message from your portfolio"
                  : "Nova mensagem do seu portfólio"
              }
            </h1>

            <div style="margin-bottom: 20px;">
              <strong>
                ${isEnglish ? "Name" : "Nome"}:
              </strong>

              <p>
                ${escapeHtml(name)}
              </p>
            </div>

            <div style="margin-bottom: 20px;">
              <strong>
                ${isEnglish ? "Email" : "E-mail"}:
              </strong>

              <p>
                ${escapeHtml(email)}
              </p>
            </div>

            <div style="margin-bottom: 20px;">
              <strong>
                ${isEnglish ? "Message" : "Mensagem"}:
              </strong>

              <p style="white-space: pre-line;">
                ${escapeHtml(message)}
              </p>
            </div>

          </div>
        `,
      });

    if (emailResponse.error) {
      console.error(
        "RESEND_ERROR:",
        emailResponse.error,
      );

      return NextResponse.json(
        {
          error:
            "Não foi possível enviar a mensagem.",
        },
        {
          status: 500,
        },
      );
    }

    return NextResponse.json(
      {
        success: true,

        message:
          "Mensagem enviada com sucesso!",
      },
      {
        status: 200,
      },
    );
  } catch (error) {
    console.error(
      "CONTACT_FORM_ERROR:",
      error,
    );

    return NextResponse.json(
      {
        error:
          "Ocorreu um erro ao enviar a mensagem.",
      },
      {
        status: 500,
      },
    );
  }
}

/**
 * Escapa caracteres HTML para evitar
 * que conteúdo enviado pelo formulário
 * seja interpretado como HTML no e-mail.
 */
function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}