import sgMail from '@sendgrid/mail';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message, subject } = req.body;

    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are required.' });
    }
    if (!/^[\w\.-]+@[\w\.-]+\.\w+$/.test(email)) {
      return res.status(400).json({ error: 'Invalid email format.' });
    }

    const sendgridApiKey = process.env.SENDGRID_API_KEY;
    const sendgridToEmail = process.env.SENDGRID_TO_EMAIL;
    // IMPORTANT: Replace 'team@hueneu.com' with your SendGrid verified sender email address.
    const sendgridFromEmail = process.env.SENDGRID_FROM_EMAIL || 'team@hueneu.com'; 

    if (!sendgridApiKey || !sendgridToEmail) {
      console.error('SendGrid API Key or To Email is not configured.');
      return res.status(500).json({ error: 'Server configuration error.' });
    }

    sgMail.setApiKey(sendgridApiKey);

    const msg = {
      to: sendgridToEmail,
      from: sendgridFromEmail, // Use your verified SendGrid sender email
      subject: subject || `New Contact Form Submission from ${name} - hueneu`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #4A4E69;">New Message via hueneu Contact Form</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap; background-color: #f4f1de; padding: 15px; border-radius: 4px;">${message}</p>
          <hr style="border: none; border-top: 1px solid #CFCAD5; margin: 20px 0;">
          <p style="font-size: 0.9em; color: #9A8C98;">This email was sent from the contact form on the hueneu website.</p>
        </div>
      `,
    };

    try {
      await sgMail.send(msg);
      res.status(200).json({ success: true, message: 'Message sent successfully!' });
    } catch (error) {
      console.error('Error sending email:', error.response ? error.response.body : error);
      res.status(500).json({ error: 'Failed to send message. Please try again later.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
