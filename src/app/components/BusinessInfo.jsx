// components/BusinessInfo.jsx
export default function BusinessInfo({ variant = 'page' }) {
  const phone = process.env.NEXT_PUBLIC_PHONE || '083-252-8058';
  const email = process.env.NEXT_PUBLIC_EMAIL || 'hello@pgphonethai.shop';
  const address = process.env.NEXT_PUBLIC_ADDRESS || 'Bangkok, Thailand';
  const company = process.env.NEXT_PUBLIC_COMPANY || 'PG Phone Thai (ถ้ามีทะเบียนนิติบุคคล ระบุเลขด้วย)';

  const cls = variant === 'footer' ? 'text-white-50' : 'text-body';

  return (
    <address className={cls} style={{ whiteSpace: 'pre-line' }}>
      <strong className={variant === 'footer' ? 'text-white' : ''}>{company}</strong>{'\n'}
      ที่อยู่: {address}{'\n'}
      โทร: <a className={variant === 'footer' ? 'link-light' : 'link-primary'} href={`tel:${phone.replace(/\s+/g,'')}`}>{phone}</a>{'\n'}
      อีเมล: <a className={variant === 'footer' ? 'link-light' : 'link-primary'} href={`mailto:${email}`}>{email}</a>
    </address>
  );
}
