// components/Footer.jsx
import Link from 'next/link';
import TrustBadges from './TrustBadges';
import BusinessInfo from './BusinessInfo';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white pt-5 mt-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-md-4">
            <h5 className="mb-3">PG Phone Thai</h5>
            <p className="text-white-50">
              ร้านขายมือถือและอุปกรณ์เสริม จัดส่งทั่วไทย พร้อมรับประกันและบริการหลังการขาย
            </p>
            <TrustBadges />
          </div>

          <div className="col-md-4">
            <h5 className="mb-3">ลิงก์ด่วน</h5>
            <ul className="list-unstyled">
              <li><Link className="link-light text-decoration-none" href="/about">เกี่ยวกับเรา</Link></li>
              <li><Link className="link-light text-decoration-none" href="/contact">ติดต่อเรา</Link></li>
              <li><Link className="link-light text-decoration-none" href="/policies/privacy">นโยบายความเป็นส่วนตัว</Link></li>
              <li><Link className="link-light text-decoration-none" href="/policies/terms">ข้อกำหนดและเงื่อนไข</Link></li>
              <li><Link className="link-light text-decoration-none" href="/policies/refund-shipping">นโยบายคืนเงิน & จัดส่ง</Link></li>
            </ul>
          </div>

          <div className="col-md-4">
            <h5 className="mb-3">ข้อมูลติดต่อ</h5>
            <BusinessInfo variant="footer" />
          </div>
        </div>

        <hr className="border-secondary my-4" />
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center pb-3">
          <small className="text-white-50">© {year} pgphonethai.shop</small>
          <small className="text-white-50">ปลอดภัยด้วย HTTPS • รองรับการชำระเงินหลายช่องทาง</small>
        </div>
      </div>
    </footer>
  );
}
