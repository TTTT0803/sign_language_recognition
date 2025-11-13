import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdEmail, MdLock } from 'react-icons/md';
import { FaEye, FaEyeSlash, FaArrowRight, FaFacebook, FaGoogle } from 'react-icons/fa';

import styles from './LoginPage.module.css';
import womanImg from '../../assets/images/login.png';
import handIcon from '../../assets/images/checklogo.png';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={styles.loginPage}>
      <div className={styles.loginContainer}>
        
        <div className={styles.loginFormColumn}>
          <div className={styles.loginTitle}>
            <h1>Đăng nhập</h1>
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

            <button type="submit" className={styles.loginButton}>
              Login <FaArrowRight />
            </button>
          </form>

          <div className={styles.loginFooter}>
            <p>Hoặc <Link to="/dang-ky" className={styles.registerLink}>ĐĂNG KÝ</Link> tại đây</p>
            <div className={styles.socialLogins}>
              <a href="#" className={`${styles.socialIcon} ${styles.socialFb}`}><FaFacebook /></a>
              <a href="#" className={`${styles.socialIcon} ${styles.socialGg}`}><FaGoogle /></a>
            </div>
          </div>
        </div>

        {/* --- CỘT BÊN PHẢI (ẢNH) --- */}
        <div className={styles.loginImageColumn}>
          <img src={womanImg} alt="Đăng nhập" />
        </div>

      </div>
    </div>
  );
};

export default LoginPage;