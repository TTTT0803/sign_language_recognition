import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Cột 1: Về chúng tôi */}
        <div className="footer-column">
          <h3>VỀ CHÚNG TÔI</h3>
          <ul>
            <li><Link to="/ve-chung-toi">Giới thiệu ứng dụng</Link></li>
            <li><Link to="/su-menh">Sứ mệnh & Tầm nhìn</Link></li>
            <li><Link to="/doi-ngu">Đội ngũ phát triển</Link></li>
          </ul>
        </div>
        
        {/* Cột 2: Tài nguyên */}
        <div className="footer-column">
          <h3>TÀI NGUYÊN</h3>
          <ul>
            <li><Link to="/kho-tu-dien">Kho từ điển ký hiệu</Link></li>
            <li><Link to="/huong-dan">Hướng dẫn sử dụng</Link></li>
            <li><Link to="/blog">Blog</Link></li>
          </ul>
        </div>
        
        {/* Cột 3: Liên hệ */}
        <div className="footer-column">
          <h3>LIÊN HỆ & HỖ TRỢ</h3>
          <ul>
            <li>Email: support@yourdomain.com</li>
            <li>Điện thoại: 0123 456 789</li>
            <li>Địa chỉ: ...</li>
          </ul>
        </div>

      </div>
      <div className="footer-copyright">
        © 2025 Ứng dụng nhận dạng ngôn ngữ ký hiệu Việt Nam. Tất cả quyền được bảo lưu.
      </div>
    </footer>
  );
};

export default Footer;