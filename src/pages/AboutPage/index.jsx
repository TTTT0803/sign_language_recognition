import React from 'react';
// 1. Import CSS Module
import styles from './AboutPage.module.css';

// 2. Import icons
import { FaLightbulb, FaBullseye, FaUsers, FaRocket } from 'react-icons/fa';

// 3. Import ảnh (đảm bảo bạn đã lưu ảnh này)
import heroImage from '../../assets/images/about-us-hero.png';

const AboutPage = () => {
  return (
    <div className={styles.aboutPage}>
      <div className={styles.pageContainer}>
        
        {/* === PHẦN HERO === */}
        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <p>
              Ứng dụng của chúng tôi là nền tảng tiên phong sử dụng trí tuệ nhân tạo (AI) 
              để nhận diện và phiên dịch ngôn ngữ ký hiệu Việt Nam. 
              Chúng tôi cam kết phá vỡ rào cản giao tiếp, hỗ trợ cộng đồng người 
              khiếm thính và những người quan tâm học hỏi ngôn ngữ ký hiệu, từ 
              đó góp phần xây dựng một xã hội hòa nhập và năng suất hơn.
            </p>
          </div>
          <div className={styles.heroImage}>
            <img src={heroImage} alt="Về chúng tôi" />
          </div>
        </section>

        {/* === LƯỚI TÍNH NĂNG === */}
        <section className={styles.featuresGrid}>
          
          {/* Card 1: Ý tưởng */}
          <div className={styles.featureCard}>
            <div className={`${styles.iconWrapper} ${styles.iconIdea}`}>
              <FaLightbulb />
            </div>
            <div className={styles.cardContent}>
              <h3>Ý tưởng</h3>
              <p>Giúp người kiếm thị, kiếm thính giải quyết một số bất tiện trong giao tiếp.</p>
            </div>
          </div>
          
          {/* Card 2: Đội ngũ */}
          <div className={styles.featureCard}>
            <div className={`${styles.iconWrapper} ${styles.iconTeam}`}>
              <FaUsers />
            </div>
            <div className={styles.cardContent}>
              <h3>Đội ngũ</h3>
              <p>Với sự đam mê công nghệ và chia sẻ, đội ngũ gồm 2 thành viên đã phát triển ra nền tảng</p>
            </div>
          </div>

          {/* Card 3: Sứ mệnh */}
          <div className={styles.featureCard}>
            <div className={`${styles.iconWrapper} ${styles.iconMission}`}>
              <FaBullseye />
            </div>
            <div className={styles.cardContent}>
              <h3>Sứ mệnh</h3>
              <p>Ứng dụng nhằm giúp người khiếm thính và người quan tâm học hỏi ngôn ngữ ký hiệu Việt Nam.</p>
            </div>
          </div>

          {/* Card 4: Tương lai */}
          <div className={styles.featureCard}>
            <div className={`${styles.iconWrapper} ${styles.iconFuture}`}>
              <FaRocket />
            </div>
            <div className={styles.cardContent}>
              <h3>Tương lai</h3>
              <p>Phát triển thêm về chức năng và độ chính xác khi nhận dạng ngôn ngữ ký hiệu</p>
            </div>
          </div>

        </section>
      </div>
    </div>
  );
};

export default AboutPage;