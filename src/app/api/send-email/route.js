import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { name, phone, email, eventDate, company, radioOption, projectDetails } = await req.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECEIVER_EMAIL,
      subject: `New Inquiry from ${name}`,
      html: `
        <h2>New Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Event Date:</strong> ${eventDate}</p>
        <p><strong>Event Type:</strong> ${company}</p>
        <p><strong>Options Selected:</strong> ${Array.isArray(radioOption) ? radioOption.join(", ") : radioOption}</p>
        <p><strong>Project Details:</strong> ${projectDetails}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ message: 'Email sent successfully' }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: 'Failed to send email' }), { status: 500 });
  }
}
