import React from 'react';
import Link from 'next/link';
import { AssetManager } from '@/lib/AssetManager';

const FooterData = {
  LOGO_ALT: 'VLXD Anh Tuấn Logo',
  DESCRIPTION: 'Hệ thống phân phối vật liệu xây dựng hàng đầu. Cung cấp sản phẩm chất lượng cao, giá cả cạnh tranh với dịch vụ giao hàng tận nơi.',
  QUICK_LINKS_TITLE: 'Liên Kết Nhanh',
  QUICK_LINKS: [
    { label: 'Trang chủ', href: '/' },
    { label: 'Sản phẩm', href: '/products' },
    { label: 'Chính sách & Quy định', href: '/info' },
    { label: 'Liên hệ', href: '/contact' },
  ],
  CONTACT_TITLE: 'Thông Tin Liên Hệ',
  CONTACT_INFO: [
    '📍 123 Đường ABC, Quận X, TP. Hồ Chí Minh',
    '📞 1900.1234.567',
    '✉️ contact@vlxdpro.vn',
  ],
  COPYRIGHT: `© ${new Date().getFullYear()} VLXD Pro. All rights reserved.`,
  SOCIALS: [
    { label: 'FB', ariaLabel: 'Facebook', href: '#' },
    { label: 'ZL', ariaLabel: 'Zalo', href: '#' },
    { label: 'YT', ariaLabel: 'Youtube', href: '#' },
  ]
};

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-section">
          <img src={AssetManager.logo} alt={FooterData.LOGO_ALT} style={{ maxWidth: '250px', marginBottom: '16px', display: 'block' }} />
          <p>{FooterData.DESCRIPTION}</p>
        </div>
        
        <div className="footer-section">
          <h3>{FooterData.QUICK_LINKS_TITLE}</h3>
          <ul className="footer-links">
            {FooterData.QUICK_LINKS.map((link, idx) => (
              <li key={idx}><Link href={link.href}>{link.label}</Link></li>
            ))}
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>{FooterData.CONTACT_TITLE}</h3>
          <ul className="footer-contact">
            {FooterData.CONTACT_INFO.map((info, idx) => (
              <li key={idx}>{info}</li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>{FooterData.COPYRIGHT}</p>
          <div className="social-links">
            {FooterData.SOCIALS.map((social, idx) => (
              <Link key={idx} href={social.href} aria-label={social.ariaLabel}>{social.label}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
