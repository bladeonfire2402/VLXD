import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AssetManagers } from '@/constants/assets';
import { RouteManager } from '@/constants/route';

const FooterData = {
  LOGO_ALT: 'VLXD Anh Tuấn Logo',
  DESCRIPTION: 'Đơn vị phân phối vật liệu xây dựng uy tín tại Bình Dương và các khu vực lân cận. Chúng tôi cam kết cung cấp sản phẩm chất lượng, có nguồn gốc rõ ràng với mức giá cạnh tranh, báo giá minh bạch và dịch vụ giao hàng tận nơi nhanh chóng, đúng tiến độ.',
  QUICK_LINKS_TITLE: 'Liên Kết Nhanh',
  QUICK_LINKS: [
    { label: 'Trang chủ', href: RouteManager.HOME },
    { label: 'Sản phẩm', href: RouteManager.PRODUCTS },
    { label: 'Chính sách & Quy định', href: RouteManager.POLICY },
    { label: 'Liên hệ', href: RouteManager.CONTACT },
  ],
  CONTACT_TITLE: 'Thông Tin Liên Hệ',
  CONTACT_INFO: [
    '📍 Số 14, KP3, P. Hòa Lợi, TP. Bến Cát, Bình Dương',
    '📞 0909 746 816',
    '✉️ vlxdanhtuan79@gmail.com',
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
        <div className="footer-section" style={{ marginRight: '15px' }}>
          <Image
            src={AssetManagers.branding.logoWithSlogan}
            alt={FooterData.LOGO_ALT}
            width={250}
            height={80}
            style={{ maxWidth: '250px', height: 'auto', marginBottom: '16px', display: 'block' }}
          />
          <p style={{ fontSize: '13px', textAlign: 'justify' }}>{FooterData.DESCRIPTION}</p>
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
