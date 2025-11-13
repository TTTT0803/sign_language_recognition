import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdEmail, MdLock } from 'react-icons/md';
import { FaEye, FaEyeSlash, FaArrowRight, FaFacebook, FaGoogle } from 'react-icons/fa';

import styles from './RegisterPage.module.css';

import womanImg from '../../assets/images/login.png';
import handIcon from '../../assets/images/checklogo.png';

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    // 3. Sử dụng styles từ CSS Module
    <div className={styles.loginPage}>
      <div className={styles.loginContainer}>
        
        {/* --- CỘT BÊN TRÁI (FORM) --- */}
        <div className={styles.loginFormColumn}>
          <div className={styles.loginTitle}>
            {/* THAY ĐỔI TEXT */}
            <h1>Đăng ký</h1>
            <img src={handIcon} alt="icon" className={styles.handIcon} />
          </div>

          <form className={styles.loginForm}>
            <label htmlFor="email">Email</label>
            <div className={styles.inputGroup}>
              <MdEmail className={styles.inputIcon} />
              <input type="email" id="email" placeholder="Nhập email của bạn" />
            </div>

            <label htmlFor="password">Mật khẩu</label>
            <div className={styles.inputGroup}>
              <MdLock className={styles.inputIcon} />
              <input 
                type={showPassword ? 'text' : 'password'} 
                id="password" 
                placeholder="Nhập mật khẩu của bạn" 
              />
              <span onClick={() => setShowPassword(!showPassword)} className={styles.eyeIcon}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            {/* THÊM TRƯỜNG "XÁC NHẬN MẬT KHẨU" */}
            <label htmlFor="confirmPassword">Xác nhận mật khẩu</label>
            <div className={styles.inputGroup}>
              <MdLock className={styles.inputIcon} />
              <input 
                type={showConfirmPassword ? 'text' : 'password'} 
                id="confirmPassword" 
                placeholder="Nhập lại mật khẩu của bạn" 
              />
              <span onClick={() => setShowConfirmPassword(!showConfirmPassword)} className={styles.eyeIcon}>
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            {/* THAY ĐỔI NÚT */}
            <button type="submit" className={styles.loginButton}>
              Đăng ký <FaArrowRight />
            </button>
          </form>

          <div className={styles.loginFooter}>
            {/* THAY ĐỔI LINK */}
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