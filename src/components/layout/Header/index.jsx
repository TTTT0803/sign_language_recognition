import React from 'react';
import { Link } from 'react-router-dom'; // <-- Dùng Link

function Header() {
  return (
    <header className="header-container">
      <div className="logo">
        <Link to="/">Logo Dự Án</Link>
      </div>
      <nav className="navigation">
        <ul>
          <li>
            <Link to="/">Trang chủ</Link>
          </li>
          <li>
            <Link to="/about">Giới thiệu</Link> {/* (Sẽ không hoạt động cho đến khi bạn tạo trang About) */}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;