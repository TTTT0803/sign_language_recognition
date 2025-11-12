// src/pages/HomePage/index.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import backgroundImage from '../../assets/images/background.png'; 

const Homepage = () => {
  return (
    <section 
      className="hero" 
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="hero-content">
        <h1>
          ỨNG DỤNG NHẬN DẠNG
          <br />
          NGÔN NGỮ KÝ HIỆU VIỆT NAM
        </h1>
        <p>Kết nối cộng đồng, phá bỏ rào cản giao tiếp</p>
        
        {/* THÊM NÚT NÀY VÀO */}
        <Link to="/su-dung" className="cta-button">
          Thử ngay
        </Link>
        
      </div>
    </section>
  );
};

export default Homepage;