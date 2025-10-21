// app/policies/refund-shipping/page.jsx
import PoliciesNav from '../../components/PoliciesNav';

export const metadata = {
  title: 'นโยบายคืนเงิน & การจัดส่ง',
  description: 'รายละเอียดนโยบายการคืนเงิน การเปลี่ยนสินค้า และการจัดส่งของ PG Phone Thai'
};

export default function RefundShippingPage() {
  return (
    <section className="py-3">
      <h1 className="h3 mb-3">นโยบายคืนเงิน & การจัดส่ง</h1>
      <PoliciesNav />

      <h2 className="h5 mt-4">การคืนเงิน/เปลี่ยนสินค้า</h2>
      <ul>
        <li>คืน/เปลี่ยนได้ภายใน 7–14 วันทำการ (ตามเงื่อนไขสินค้า) นับจากวันที่รับของ</li>
        <li>สินค้าต้องอยู่ในสภาพสมบูรณ์ พร้อมอุปกรณ์/บรรจุภัณฑ์</li>
        <li>ติดต่อฝ่ายบริการลูกค้าก่อนส่งคืนทุกครั้ง</li>
      </ul>

      <h2 className="h5 mt-3">การจัดส่ง</h2>
      <ul>
        <li>จัดส่งภายใน 1–2 วันทำการหลังยืนยันการชำระ</li>
        <li>แจ้งเลขติดตามพัสดุทุกคำสั่งซื้อ</li>
        <li>ค่าจัดส่งและผู้ให้บริการจะแสดงในขั้นตอนชำระเงิน</li>
      </ul>

      <h2 className="h5 mt-3">สินค้ามีปัญหา</h2>
      <p>กรณีได้รับสินค้าผิด/ชำรุด กรุณาแจ้งภายใน 48 ชั่วโมง พร้อมหลักฐานรูปถ่าย/วิดีโอ</p>

      <h2 className="h5 mt-3">ช่องทางติดต่อ</h2>
      <p>อีเมล: {process.env.NEXT_PUBLIC_EMAIL || 'hello@pgphonethai.shop'} • โทร: {process.env.NEXT_PUBLIC_PHONE || '083-252-8058'}</p>
    </section>
  );
}
