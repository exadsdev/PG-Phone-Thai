// app/contact/page.jsx
import BusinessInfo from '../components/BusinessInfo';
import PoliciesNav from '../components/PoliciesNav';

export const metadata = {
  title: 'ติดต่อเรา',
  description: 'ช่องทางการติดต่อร้าน PG Phone Thai เบอร์โทร อีเมล และที่อยู่'
};

export default function ContactPage() {
  return (
    <section className="py-3">
      <h1 className="h3 mb-3">ติดต่อเรา</h1>
      <PoliciesNav />
      <div className="row g-4">
        <div className="col-md-6">
          <div className="p-3 bg-light border rounded">
            <h2 className="h6">ข้อมูลติดต่อ</h2>
            <BusinessInfo />
          </div>
        </div>
        <div className="col-md-6">
          <h2 className="h6">แบบฟอร์มติดต่อ</h2>
          <form method="post" action="/api/contact">
            <div className="mb-3">
              <label className="form-label">ชื่อ</label>
              <input name="name" className="form-control" required />
            </div>
            <div className="mb-3">
              <label className="form-label">อีเมล</label>
              <input type="email" name="email" className="form-control" required />
            </div>
            <div className="mb-3">
              <label className="form-label">ข้อความ</label>
              <textarea name="message" className="form-control" rows={4} required></textarea>
            </div>
            <button className="btn btn-primary">ส่งข้อความ</button>
          </form>
          <p className="text-muted small mt-2">* ฟอร์มนี้สามารถเชื่อมต่อ API/Email ของคุณได้ภายหลัง</p>
        </div>
      </div>
    </section>
  );
}
