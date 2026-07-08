import React from 'react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Về VLXD Pro</h3>
          <p>
            Hệ thống phân phối vật liệu xây dựng hàng đầu. 
            Cung cấp sản phẩm chất lượng cao, giá cả cạnh tranh 
            với dịch vụ giao hàng tận nơi.
          </p>
        </div>
        
        <div className="footer-section">
          <h3>Liên Kết Nhanh</h3>
          <ul className="footer-links">
            <li><Link href="/">Trang chủ</Link></li>
            <li><Link href="/products">Sản phẩm</Link></li>
            <li><Link href="/info">Chính sách & Quy định</Link></li>
            <li><Link href="/contact">Liên hệ</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Thông Tin Liên Hệ</h3>
          <ul className="footer-contact">
            <li>📍 123 Đường ABC, Quận X, TP. Hồ Chí Minh</li>
            <li>📞 1900.1234.567</li>
            <li>✉️ contact@vlxdpro.vn</li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>&copy; {new Date().getFullYear()} VLXD Pro. All rights reserved.</p>
          <div className="social-links">
            <Link href="#" aria-label="Facebook">FB</Link>
            <Link href="#" aria-label="Zalo">ZL</Link>
            <Link href="#" aria-label="Youtube">YT</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
