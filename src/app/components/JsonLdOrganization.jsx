// components/JsonLdOrganization.jsx
'use client';

import Script from 'next/script';

export default function JsonLdOrganization({ org }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: org.name,
    url: org.url,
    logo: org.logo,
    contactPoint: [{
      '@type': 'ContactPoint',
      telephone: org.phone,
      contactType: 'customer service',
      email: org.email,
      areaServed: 'TH'
    }],
    sameAs: [
      // ใส่ลิงก์ Social ถ้ามี เช่น Facebook, YouTube
    ]
  };

  return (
    <Script id="jsonld-org" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}
