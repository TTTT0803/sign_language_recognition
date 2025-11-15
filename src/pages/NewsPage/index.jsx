import React from 'react';
import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaTag, FaArrowRight } from 'react-icons/fa';

// 1. Import CSS Module
import styles from './NewsPage.module.css';

// 2. Import ảnh (hãy chắc chắn bạn đã có ảnh ở đây)
import imgHero from '../../assets/images/news-hero.png';
import img1 from '../../assets/images/news-1.png';
import img2 from '../../assets/images/news-2.png';
import img3 from '../../assets/images/news-3.png';

// 3. Dữ liệu tin tức giả (mock data)
const mockNewsData = [
  {
    id: 1,
    title: 'Công nghệ AI mới nhận dạng ngôn ngữ ký hiệu với độ chính xác 99%',
    snippet: 'Một nhóm nghiên cứu vừa công bố một mô hình AI đột phá, có khả năng dịch ngôn ngữ ký hiệu theo thời gian thực...',
    category: 'Công nghệ',
    date: '15/11/2025',
    imageUrl: imgHero,
  },
  {
    id: 2,
    title: 'Cách học ngôn ngữ ký hiệu hiệu quả cho người mới bắt đầu',
    snippet: 'Tìm hiểu các phương pháp và tài nguyên tốt nhất để bắt đầu hành trình học ngôn ngữ ký hiệu của bạn.',
    category: 'Hướng dẫn',
    date: '14/11/2025',
    imageUrl: img1,
  },
  {
    id: 3,
    title: 'Câu chuyện truyền cảm hứng: Phá bỏ rào cản giao tiếp',
    snippet: 'Gặp gỡ những cá nhân đã sử dụng công nghệ để kết nối cộng đồng người khiếm thính và người nghe.',
    category: 'Cộng đồng',
    date: '13/11/2025',
    imageUrl: img2,
  },
  {
    id: 4,
    title: 'Cập nhật ứng dụng: Tính năng kho từ vựng mới',
    snippet: 'Phiên bản 2.0 ra mắt với kho từ vựng được mở rộng, bao gồm hơn 1000 ký hiệu mới và video hướng dẫn.',
    category: 'Cập nhật',
    date: '12/11/2025',
    imageUrl: img3,
  },
];

// Tách bài viết đầu tiên làm Hero
const heroPost = mockNewsData[0];
const otherPosts = mockNewsData.slice(1); // Lấy các bài viết còn lại

const NewsPage = () => {
  return (
    <div className={styles.newsPage}>
      
      {/* === BÀI VIẾT HERO === */}
      <Link to={`/tin-tuc/${heroPost.id}`} className={styles.heroPost}>
        <img src={heroPost.imageUrl} alt={heroPost.title} className={styles.heroImage} />
        <div className={styles.heroContent}>
          <h1>{heroPost.title}</h1>
          <p>{heroPost.snippet}</p>
        </div>
      </Link>

      {/* === LƯỚI BÀI VIẾT === */}
      <h2 className={styles.gridTitle}>Tin tức khác</h2>
      <div className={styles.newsGrid}>
        {otherPosts.map((post) => (
          <Link to={`/tin-tuc/${post.id}`} key={post.id} className={styles.newsCard}>
            <img src={post.imageUrl} alt={post.title} className={styles.cardImage} />
            <div className={styles.cardContent}>
              <div className={styles.cardMeta}>
                <span><FaTag /> {post.category}</span>
                <span><FaCalendarAlt /> {post.date}</span>
              </div>
              <h3 className={styles.cardTitle}>{post.title}</h3>
              <p className={styles.cardSnippet}>{post.snippet}</p>
              <div className={styles.readMore}>
                Đọc thêm <FaArrowRight size={12} />
              </div>
            </div>
          </Link>
        ))}
      </div>

    </div>
  );
};

export default NewsPage;