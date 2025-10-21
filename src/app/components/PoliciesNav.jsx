// components/PoliciesNav.jsx
import Link from 'next/link';

export default function PoliciesNav() {
  return (
    <div className="alert alert-light border d-flex flex-wrap gap-3">
      <strong className="me-2">นโยบาย:</strong>
      <Link className="btn btn-sm btn-outline-secondary" href="/policies/privacy">ความเป็นส่วนตัว</Link>
      <Link className="btn btn-sm btn-outline-secondary" href="/policies/terms">เงื่อนไขการใช้บริการ</Link>
      <Link className="btn btn-sm btn-outline-secondary" href="/policies/refund-shipping">คืนเงิน & จัดส่ง</Link>
      <Link className="btn btn-sm btn-outline-secondary" href="/contact">ติดต่อเรา</Link>
    </div>
  );
}
