// app/api/contact/route.js
export async function POST(req) {
  try {
    const body = await req.formData();
    const name = String(body.get('name') || '').trim();
    const email = String(body.get('email') || '').trim();
    const message = String(body.get('message') || '').trim();

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ ok: false, error: 'ข้อมูลไม่ครบ' }), { status: 400 });
    }

    // TODO: เชื่อม email provider / Line Notify / DB ตามต้องการ
    console.log('[Contact]', { name, email, message, ts: new Date().toISOString() });

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (e) {
    return new Response(JSON.stringify({ ok: false, error: 'เกิดข้อผิดพลาด' }), { status: 500 });
  }
}
