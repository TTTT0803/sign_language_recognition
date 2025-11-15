import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaVideo, FaPlay, FaBook } from 'react-icons/fa';

// 1. IMPORT CSS MODULE
import styles from './UsePage.module.css';
import heroBackground from '../../assets/images/background.png';

const UsePage = () => {
  const videoRef = useRef(null);
  const streamRef = useRef(null);
  const [isCameraActive, setIsCameraActive] = useState(true);

  // Hàm BẬT camera
  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      streamRef.current = stream;
      setIsCameraActive(true);
    } catch (err) {
      console.error("Lỗi khi truy cập webcam:", err);
    }
  };

  // Hàm TẮT camera
  const stopCamera = () => {
    if (streamRef.current) {
      const tracks = streamRef.current.getTracks();
      tracks.forEach(track => track.stop());
      videoRef.current.srcObject = null;
      streamRef.current = null;
      setIsCameraActive(false);
    }
  };

  const handleToggleCamera = () => {
    if (isCameraActive) {
      stopCamera();
    } else {
      startCamera();
    }
  };

  useEffect(() => {
    startCamera();
    return () => {
      stopCamera(); // Tắt camera khi rời trang
    };
  }, []); // Chỉ chạy 1 lần

  return (
    // 2. SỬ DỤNG {styles.usePageContainer}
    <div className={styles.usePageContainer}>
      
      {/* CỘT BÊN TRÁI (VIDEO FEED) */}
      <div 
        className={styles.videoColumn}
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <video 
          ref={videoRef} 
          className={styles.videoFeed} 
          autoPlay 
          playsInline 
          muted
        />

        <button 
          // 3. SỬ DỤNG TEMPLATE LITERAL VỚI STYLES
          className={`
            ${styles.stopButton} 
            ${!isCameraActive ? styles.startButton : ''}
          `}
          onClick={handleToggleCamera}
        >
          <div 
            className={`
              ${styles.iconWrapper} 
              ${!isCameraActive ? styles.startIconWrapper : ''}
            `}
          >
            {isCameraActive ? <FaVideo /> : <FaPlay />} 
          </div>
          
          {/* Text này PHẢI nằm trong <button> */}
          {isCameraActive ? 'Dừng nhận dạng' : 'Bắt đầu nhận dạng'}
        </button>
      </div>

      {/* CỘT BÊN PHẢI (KẾT QUẢ) */}
      <div className={styles.resultsColumn}>
        <div className={styles.resultsPanel}>
          
          <h3 className={styles.resultsTitle}>KẾT QUẢ NHẬN DẠNG</h3>
          
          <div className={styles.resultDisplayBox}>
            <p>XIN CHÀO BẠN</p>
            <span className={styles.blinkingCursor}></span>
          </div>

          <div className={styles.actionButtons}>
            <button className={styles.actionBtnPrimary}>
              <FaPlay /> Bắt đầu phiên mới
            </button>
            <Link to="/kho-tu-dien" className={styles.actionBtnSecondary}>
              <FaBook /> Truy cập Kho từ điển
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsePage;