import React from 'react';
import { NavLink } from 'react-router-dom';
import checklogo from '../../../assets/images/checklogo.png';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <NavLink to="/" className="logo">
            <img 
              src={checklogo} 
              alt="logo" 
              style={{ width: '4rem', height: '4rem' }} 
            />
        </NavLink>
        <nav className="nav-menu">
          <NavLink to="/">Trang chủ</NavLink>
          <NavLink to="/su-dung">Sử dụng</NavLink>
          <NavLink to="/tin-tuc">Tin tức</NavLink>
          <NavLink to="/about-me">Về chúng tôi</NavLink>
          <NavLink to="/lien-he">Liên hệ</NavLink>
        </nav>
        <div className="auth-buttons">
          <NavLink to="/dang-ky" className="btn btn-register">
            Đăng ký
          </NavLink>
          <NavLink to="/dangnhap" className="btn btn-login">
            Đăng nhập
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;