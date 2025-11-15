import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

// 1. Import CSS Module
import styles from './ContactPage.module.css';

// 2. Import ảnh (đảm bảo bạn đã lưu ảnh này)
import agentImage from '../../assets/images/contact-agent.png';

const ContactPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Xử lý logic gửi form ở đây
    alert('Đã gửi thông tin!');
  };

  return (
    <div className={styles.contactPage}>
      <div className={styles.contactContainer}>
        
        {/* === CỘT BÊN TRÁI (THÔNG TIN) === */}
        <div className={styles.infoColumn}>
          <h2 className={styles.title}>Chúng tôi luôn sẵn sàng lắng nghe</h2>
          
          <div className={styles.infoBlock}>
            <FaMapMarkerAlt className={styles.infoIcon} />
            <p>
              Khu Đô thị Đại học Đà Nẵng,<br />
              Phường Hòa Quý, Quận Ngũ Hành Sơn,<br />
              TP. Đà Nẵng.
            </p>
          </div>

          <div className={styles.infoBlock}>
            <FaPhoneAlt className={styles.infoIcon} />
            <p>0396688274</p>
          </div>

          <div className={styles.infoBlock}>
            <FaEnvelope className={styles.infoIcon} />
            <p>deadlinechillphet@gmail.com</p>
          </div>
        </div>

        {/* === CỘT BÊN PHẢI (FORM) === */}
        <div className={styles.formColumn}>
          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <h3 className={styles.title}>Gửi thông tin liên hệ</h3>
            
            <div className={styles.formGroup}>
              <label htmlFor="name">Họ và tên</label>
              <input 
                type="text" 
                id="name" 
                className={styles.formInput} 
                placeholder="Nhập họ và tên của bạn"
                required
              />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                className={styles.formInput} 
                placeholder="Nhập email của bạn"
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message">Nội dung</label>
              <textarea 
                id="message" 
                className={styles.formTextarea}
                placeholder="Nội dung bạn muốn gửi..."
                required
              />
            </div>
            
            {/* NÚT GỬI ĐÃ ĐƯỢC THÊM */}
            <button type="submit" className={styles.submitButton}>
              Gửi
            </button>
          </form>

          <div className={styles.agentImage}>
            <img src={agentImage} alt="Hỗ trợ viên" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default ContactPage;