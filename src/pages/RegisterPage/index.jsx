import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // 1. Thêm useNavigate để chuyển trang
import { MdEmail, MdLock } from 'react-icons/md';
import { FaEye, FaEyeSlash, FaArrowRight, FaFacebook, FaGoogle } from 'react-icons/fa';

import styles from './RegisterPage.module.css';

import womanImg from '../../assets/images/login.png';
import handIcon from '../../assets/images/checklogo.png';

const RegisterPage = () => {
  const navigate = useNavigate(); // Hook chuyển trang
  
  // State hiển thị mật khẩu
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // 2. State lưu dữ liệu nhập vào
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // 3. Hàm xử lý Đăng Ký
  const handleRegister = async (e) => {
    e.preventDefault(); // Chặn tải lại trang
    setErrorMessage(''); // Xóa lỗi cũ

    // Kiểm tra mật khẩu khớp nhau chưa
    if (password !== confirmPassword) {
      setErrorMessage("Mật khẩu xác nhận không khớp!");
      return;
    }

    try {
      // Gọi API sang Python Backend
      const response = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }) // Gửi email và pass đi
      });

      const data = await response.json();

      if (data.success) {
        alert("Đăng ký thành công! Vui lòng đăng nhập.");
        navigate('/dangnhap'); // Chuyển hướng về trang đăng nhập (kiểm tra lại đúng đường dẫn trong App.js nhé)
      } else {
        setErrorMessage(data.message); // Hiển thị lỗi từ server (VD: Email đã tồn tại)
      }

    } catch (error) {
      console.error("Lỗi:", error);
      setErrorMessage("Không thể kết nối tới Server Backend!");
    }
  };

  return (
    <div className={styles.loginPage}>
      <div className={styles.loginContainer}>
        
        {/* --- CỘT BÊN TRÁI (FORM) --- */}
        <div className={styles.loginFormColumn}>
          <div className={styles.loginTitle}>
            <h1>Đăng ký</h1>
            <img src={handIcon} alt="icon" className={styles.handIcon} />
          </div>

          {/* Thêm sự kiện onSubmit */}
          <form className={styles.loginForm} onSubmit={handleRegister}>
            
            {/* Hiển thị thông báo lỗi nếu có */}
            {errorMessage && <p style={{color: 'red', textAlign: 'center', marginBottom: '10px'}}>{errorMessage}</p>}

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

            <label htmlFor="confirmPassword">Xác nhận mật khẩu</label>
            <div className={styles.inputGroup}>
              <MdLock className={styles.inputIcon} />
              <input 
                type={showConfirmPassword ? 'text' : 'password'} 
                id="confirmPassword" 
                placeholder="Nhập lại mật khẩu của bạn" 
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)} // Lưu giá trị nhập
                required
              />
              <span onClick={() => setShowConfirmPassword(!showConfirmPassword)} className={styles.eyeIcon}>
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            <button type="submit" className={styles.loginButton}>
              Đăng ký <FaArrowRight />
            </button>
          </form>

          <div className={styles.loginFooter}>
            {/* Lưu ý: Kiểm tra đường dẫn 'to' khớp với file App.js */}
            <p>Đã có tài khoản? <Link to="/dangnhap" className={styles.registerLink}>ĐĂNG NHẬP</Link> tại đây</p>
            <div className={styles.socialLogins}>
              <a href="#" className={`${styles.socialIcon} ${styles.socialFb}`}><FaFacebook /></a>
              <a href="#" className={`${styles.socialIcon} ${styles.socialGg}`}><FaGoogle /></a>
            </div>
          </div>
        </div>

        {/* --- CỘT BÊN PHẢI (ẢNH) --- */}
        <div className={styles.loginImageColumn}>
          <img src={womanImg} alt="Đăng ký" />
        </div>

      </div>
    </div>
  );
};

export default RegisterPage;