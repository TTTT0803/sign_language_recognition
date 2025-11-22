import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Thêm useNavigate để chuyển trang
import { MdEmail, MdLock } from 'react-icons/md';
import { FaEye, FaEyeSlash, FaArrowRight, FaFacebook, FaGoogle } from 'react-icons/fa';

import styles from './LoginPage.module.css';
import womanImg from '../../assets/images/login.png';
import handIcon from '../../assets/images/checklogo.png';

const LoginPage = () => {
  const navigate = useNavigate(); // Hook để chuyển hướng
  const [showPassword, setShowPassword] = useState(false);
  
  // 1. Tạo State để lưu dữ liệu nhập vào
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // 2. Hàm xử lý khi bấm nút Login
  const handleLogin = async (e) => {
    e.preventDefault(); // Chặn reload trang
    setErrorMessage(''); // Xóa lỗi cũ

    try {
      // Gọi API sang Python
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();

      if (data.success) {
        // --- QUAN TRỌNG: LƯU THÔNG TIN ĐĂNG NHẬP ---
        localStorage.setItem('user_info', JSON.stringify(data.user));
        
        alert("Đăng nhập thành công!");
        navigate('/su-dung'); // Chuyển sang trang Sử dụng
      } else {
        setErrorMessage(data.message);
      }

    } catch (error) {
      console.error("Lỗi:", error);
      setErrorMessage("Không thể kết nối tới Server!");
    }
  };

  return (
    <div className={styles.loginPage}>
      <div className={styles.loginContainer}>
        
        <div className={styles.loginFormColumn}>
          <div className={styles.loginTitle}>
            <h1>Đăng nhập</h1>
            <img src={handIcon} alt="icon" className={styles.handIcon} />
          </div>

          {/* Thêm sự kiện onSubmit */}
          <form className={styles.loginForm} onSubmit={handleLogin}>
            
            {/* Hiển thị lỗi nếu có */}
            {errorMessage && <p style={{color: 'red', textAlign: 'center'}}>{errorMessage}</p>}

            <label htmlFor="email">Email</label>
            <div className={styles.inputGroup}>
              <MdEmail className={styles.inputIcon} />
              <input 
                type="email" 
                id="email" 
                placeholder="Nhập email của bạn"
                value={email}
                onChange={(e) => setEmail(e.target.value)} // Lưu giá trị nhập
                required 
              />
            </div>

            <label htmlFor="password">Mật khẩu</label>
            <div className={styles.inputGroup}>
              <MdLock className={styles.inputIcon} />
              <input 
                type={showPassword ? 'text' : 'password'} 
                id="password" 
                placeholder="Nhập mật khẩu của bạn"
                value={password}
                onChange={(e) => setPassword(e.target.value)} // Lưu giá trị nhập
                required
              />
              <span onClick={() => setShowPassword(!showPassword)} className={styles.eyeIcon}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            <button type="submit" className={styles.loginButton}>
              Login <FaArrowRight />
            </button>
          </form>

          <div className={styles.loginFooter}>
            <p>Hoặc <Link to="/dang-ky" className={styles.registerLink}>ĐĂNG KÝ</Link> tại đây</p>
            {/* ... Social buttons giữ nguyên ... */}
          </div>
        </div>

        <div className={styles.loginImageColumn}>
          <img src={womanImg} alt="Đăng nhập" />
        </div>

      </div>
    </div>
  );
};

export default LoginPage;