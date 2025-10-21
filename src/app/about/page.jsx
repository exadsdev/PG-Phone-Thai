// app/about/page.jsx
import BusinessInfo from '../components/BusinessInfo';
import PoliciesNav from '../components/PoliciesNav';

export const metadata = {
  title: 'เกี่ยวกับเรา',
  description: 'แนะนำร้าน PG Phone Thai ประวัติ แนวทางการบริการ ทีมงาน และข้อมูลติดต่อ'
};

export default function AboutPage() {
  return (
    <section className="py-3">
      <h1 className="h3 mb-3">เกี่ยวกับเรา</h1>
      <PoliciesNav />
      <div className="row g-4">
        <div className="col-md-8">
          <p>
            PG Phone Thai ก่อตั้งขึ้นเพื่อมอบประสบการณ์การซื้อมือถือออนไลน์ที่โปร่งใส ได้มาตรฐาน และบริการหลังการขายที่ใส่ใจ
            เราคัดสรรสินค้าแท้ รับประกัน พร้อมช่องทางการติดต่อที่ชัดเจน
          </p>
          <ul>
            <li>สินค้าพร้อมจัดส่งจากไทย มีการรับประกันตามเงื่อนไขที่ระบุ</li>
            <li>ใบเสร็จ/ใบกำกับ (กรณีต้องการ)</li>
            <li>ช่องทางชำระเงินหลากหลาย และการเข้ารหัสข้อมูลด้วย HTTPS</li>
          </ul>
          <h2 className="h5 mt-4">วิสัยทัศน์</h2>
          <p>เป็นร้านมือถือออนไลน์ที่ลูกค้าไว้วางใจ โปร่งใส และให้ข้อมูลที่เป็นประโยชน์ก่อนการตัดสินใจ</p>
        </div>
        <div className="col-md-4">
          <div className="p-3 bg-light border rounded">
            <h3 className="h6">ข้อมูลธุรกิจ</h3>
            <BusinessInfo />
          </div>
        </div>
      </div>
    </section>
  );
}
