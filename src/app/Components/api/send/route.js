import { Resend } from 'resend';

const resend = new Resend("re_Socg38dT_2ZJZAgwd6phuQfC785xR7Mr7");
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
  const { body } = await req.json;
  const { email, subject, message } = body;
  try {
    const { data, error } = await resend.emails.send({
      from: 'fromEmail',
      to: ['delivered@resend.dev', email],
      subject: 'Hello world',
      react:
        (
          <>
            <h1> {subject} </h1>
            <p>Thank you for reaching out!</p>
            <p>New Message Submitted:</p>
            <p> {message} </p>
          </>
        ),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}