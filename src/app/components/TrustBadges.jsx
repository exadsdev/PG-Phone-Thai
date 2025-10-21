// components/TrustBadges.jsx
export default function TrustBadges() {
  return (
    <div className="d-flex align-items-center gap-3 mt-2">
      <img src="/badges/ssl.jpg" alt="SSL Secured" width={60} />
      <img src="/badges/visa.jpg" alt="Visa" width={60} />
      <img src="/badges/mastercard.jpg" alt="Mastercard" width={60} />
      <img src="/badges/cod.jpg" alt="เก็บเงินปลายทาง" width={60} />
      <img src="/badges/warranty.jpg" alt="รับประกันสินค้า" width={60} />
    </div>
  );
}
