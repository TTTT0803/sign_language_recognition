import React, { useState, useEffect } from 'react'; // 1. Thêm hooks nếu muốn xử lý đăng nhập sau này
import { NavLink, useNavigate } from 'react-router-dom';
import checklogo from '../../../assets/images/checklogo.png';

const Header = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  // Kiểm tra xem đã đăng nhập chưa để hiển thị nút cho đúng
  useEffect(() => {
    const storedUser = localStorage.getItem('user_info');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Hàm đăng xuất
  const handleLogout = () => {
    localStorage.removeItem('user_info');
    setUser(null);
    navigate('/dangnhap');
  };

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
          
          {/* --- THÊM THẺ MỚI Ở ĐÂY --- */}
          <NavLink to="/kho-tu-dien">Kho từ điển</NavLink>
          {/* -------------------------- */}

          <NavLink to="/tin-tuc">Tin tức</NavLink>
          <NavLink to="/about-me">Về chúng tôi</NavLink>
          <NavLink to="/lien-he">Liên hệ</NavLink>
        </nav>

        <div className="auth-buttons">
          {user ? (
            // Nếu ĐÃ ĐĂNG NHẬP: Hiện tên và nút Đăng xuất
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              <span style={{ fontWeight: 'bold', color: '#333' }}>Hi, {user.email?.split('@')[0]}</span>
              <button 
                onClick={handleLogout} 
                className="btn btn-login" // Tận dụng class cũ
                style={{ backgroundColor: '#dc3545', border: 'none' }}
              >
                Đăng xuất
              </button>
            </div>
          ) : (
            // Nếu CHƯA ĐĂNG NHẬP: Hiện nút Đăng ký / Đăng nhập cũ
            <>
              <NavLink to="/dang-ky" className="btn btn-register">
                Đăng ký
              </NavLink>
              <NavLink to="/dangnhap" className="btn btn-login">
                Đăng nhập
              </NavLink>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;