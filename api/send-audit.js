// 文件路径：/api/send-audit.js
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { url, email } = req.body;

  if (!url || !email) {
    return res.status(400).json({ error: 'URL and Email are required' });
  }

  const RESEND_API_KEY = process.env.RESEND_API_KEY;

  try {
    // 1. 发送给客户的确认信
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${re_Fo6o6qU8_4Tn7kh8SHyVbrUMmgYcwxd1a}`,
      },
      body: JSON.stringify({
        from: 'IAIGEO Engine <audit@mail.iaigeo.com>',
        to: [email],
        subject: 'IAIGEO Audit Request Received — ' + url,
        html: `<p>We received your request for <strong>${url}</strong>. Your 1-page PDF audit will arrive within 12 hours.</p>`,
      }),
    });

    // 2. 发送给你的通知信
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${re_Fo6o6qU8_4Tn7kh8SHyVbrUMmgYcwxd1a}`,
      },
      body: JSON.stringify({
        from: 'IAIGEO System <system@mail.iaigeo.com>',
        to: ['yiming@tutamail.com'], // 你的个人接收邮箱
        subject: '🔥 New GEO Audit Request: ' + url,
        html: `<p>New Lead!</p><p>URL: ${url}</p><p>Email: ${email}</p>`,
      }),
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}