export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { url, email } = req.body;

  if (!url || !email) {
    return res.status(400).json({ error: 'URL and Email are required' });
  }

  // 1. 从 Vercel 环境变量中获取，绝对不要直接写明文！
  const RESEND_API_KEY = process.env.RESEND_API_KEY;

  if (!RESEND_API_KEY) {
    return res.status(500).json({ error: 'RESEND_API_KEY is missing in Vercel settings.' });
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // 2. 注意：Bearer 后面的变量两边不需要加额外的引号，用模板字符串拼起来
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'IAIGEO Engine <audit@mail.iaigeo.com>',
        reply_to: 'audit.mail@iaigeo.com',
        to: [email],
        subject: 'IAIGEO Audit Request Received — ' + url,
        html: `<p>We received your request for <strong>${url}</strong>. Your PDF report will arrive in this inbox within 12 hours.</p>`,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(500).json({ error: data.message || 'Resend error' });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}