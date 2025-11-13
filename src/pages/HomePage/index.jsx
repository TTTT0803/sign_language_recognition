import React from 'react';
import { Link } from 'react-router-dom';
// 1. Import CSS Module
import styles from './HomePage.module.css';

// 2. Import icons (hãy chắc chắn bạn đã chạy 'npm install react-icons')
import { FaRegHandPointer, FaBookOpen, FaUserFriends, FaCamera, FaBrain, FaRegCommentDots } from 'react-icons/fa';

// 3. Import ảnh nền (đường dẫn này phải đúng)
import backgroundImage from '../../assets/images/background.png'; 

const Homepage = () => {
  return (
    <> {/* Dùng Fragment bọc 2 section */}
      
      {/* === SECTION 1: HERO (Code cũ, nhưng dùng styles.) === */}
      <section 
        className={styles.hero} 
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className={styles.heroContent}>
          <h1>
            ỨNG DỤNG NHẬN DẠNG
            <br />
            NGÔN NGỮ KÝ HIỆU VIỆT NAM
          </h1>
          <p>Kết nối cộng đồng, phá bỏ rào cản giao tiếp</p>
          <Link to="/su-dung" className={styles.ctaButton}>
            Thử ngay
          </Link>
        </div>
      </section>

      {/* === SECTION 2: TÍNH NĂNG (Code mới) === */}
      <section className={styles.featuresSection}>
        <div className={styles.featuresContainer}>
          
          {/* CỘT TÍNH NĂNG NỔI BẬT */}
          <div className={styles.featuresColumn}>
            <h2 className={styles.sectionTitle}>TÍNH NĂNG NỔI BẬT</h2>
            
            <div className={styles.featureItem}>
              <FaRegHandPointer className={styles.featureIcon} />
              <div>
                <h3>Nhận dạng ký hiệu</h3>
                <p>Phát hiện và dịch ngôn ngữ ký hiệu theo thời gian thực với độ chính xác cao.</p>
              </div>
            </div>

            <div className={styles.featureItem}>
              <FaBookOpen className={styles.featureIcon} />
              <div>
                <h3>Kho từ điển ký hiệu đa dạng</h3>
                <p>Truy cập thư viện ký hiệu phong phú, dễ dàng tìm kiếm và tra cứu các ký hiệu tiếng Việt.</p>
              </div>
            </div>

            <div className={styles.featureItem}>
              <FaUserFriends className={styles.featureIcon} />
              <div>
                <h3>Bài học tương tác cá nhân hóa</h3>
                <p>Học ngôn ngữ ký hiệu qua các bài học được thiết kế riêng, trực quan sinh động và dễ tiếp thu.</p>
              </div>
            </div>
          </div>
          
          {/* CỘT CÁCH THỨC VẬN HÀNH */}
          <div className={styles.howItWorksColumn}>
            <h2 className={styles.sectionTitle}>CÁCH THỨC VẬN HÀNH</h2>
            
            <div className={styles.featureItem}>
              <FaCamera className={styles.featureIcon} />
              <div>
                <h3>Mở camera & ký hiệu</h3>
                <p>Kích hoạt camera của ứng dụng và thực hiện các ký hiệu bạn muốn dịch.</p>
              </div>
            </div>

            <div className={styles.featureItem}>
              <FaBrain className={styles.featureIcon} />
              <div>
                <h3>AI xử lý & nhận dạng</h3>
                <p>Công nghệ AI tiên tiến của chúng tôi sẽ phân tích chuyển động và hình dáng ký hiệu.</p>
              </div>
            </div>

            <div className={styles.featureItem}>
              <FaRegCommentDots className={styles.featureIcon} />
              <div>
                <h3>Dịch hiệu văn bản</h3>
                <p>Ứng dụng sẽ dịch ký hiệu thành văn bản tương ứng, giúp bạn giao tiếp dễ dàng.</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Homepage;