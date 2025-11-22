import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaArrowLeft, FaExclamationCircle } from 'react-icons/fa';

// Import CSS Module (Bạn nhớ tạo file này ở bước 2 nhé)
import styles from './DictionaryPage.module.css'; 

const DictionaryPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [dictionaryData, setDictionaryData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // --- GỌI API LẤY DỮ LIỆU ---
  useEffect(() => {
    const fetchDictionary = async () => {
      try {
        // Gọi xuống Backend Python
        const response = await fetch('http://localhost:5000/api/dictionary');
        
        if (!response.ok) {
            throw new Error('Kết nối server thất bại');
        }

        const data = await response.json();
        setDictionaryData(data);
        setLoading(false);
      } catch (err) {
        console.error("Lỗi:", err);
        setError("Không thể lấy dữ liệu từ Server. Hãy kiểm tra lại Backend Python.");
        setLoading(false);
      }
    };

    fetchDictionary();
  }, []);

  // --- XỬ LÝ TÌM KIẾM ---
  const filteredData = dictionaryData.filter((item) =>
    item.word.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.container}>
      
      {/* HEADER: Nút quay lại & Tiêu đề */}
      <div className={styles.header}>
        <Link to="/su-dung" className={styles.backBtn}>
            <FaArrowLeft /> Quay lại trang Sử dụng
        </Link>
        <h1 className={styles.pageTitle}>📖 Kho Từ Điển Ký Hiệu</h1>
      </div>

      {/* THANH TÌM KIẾM */}
      <div className={styles.searchWrapper}>
        <div className={styles.searchBox}>
            <FaSearch className={styles.searchIcon} />
            <input 
            type="text" 
            placeholder="Tìm kiếm chữ cái hoặc từ vựng..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>
      </div>

      {/* NỘI DUNG CHÍNH */}
      <div className={styles.contentArea}>
        
        {/* Trường hợp 1: Đang tải */}
        {loading && <div className={styles.loading}>⏳ Đang tải dữ liệu...</div>}

        {/* Trường hợp 2: Bị lỗi */}
        {error && (
            <div className={styles.errorBox}>
                <FaExclamationCircle size={30} />
                <p>{error}</p>
            </div>
        )}

        {/* Trường hợp 3: Hiển thị danh sách */}
        {!loading && !error && (
            <div className={styles.grid}>
                {filteredData.length > 0 ? (
                    filteredData.map((item) => (
                    <div key={item.id} className={styles.card}>
                        <div className={styles.imageWrapper}>
                            <img 
                                src={item.image_url} 
                                alt={`Ký hiệu ${item.word}`} 
                                // Nếu ảnh lỗi, hiện ảnh placeholder xám
                                onError={(e) => {
                                    e.target.src = 'https://via.placeholder.com/300x200?text=No+Image';
                                }}
                            />
                        </div>
                        <div className={styles.cardContent}>
                            <h3 className={styles.wordTitle}>{item.word}</h3>
                            <p className={styles.wordDesc}>{item.description}</p>
                        </div>
                    </div>
                    ))
                ) : (
                    <div className={styles.noResult}>
                        <p>Không tìm thấy kết quả nào cho "<b>{searchTerm}</b>"</p>
                        <img 
                            src="https://cdn-icons-png.flaticon.com/512/6134/6134065.png" 
                            alt="Not found" 
                            width="100"
                            style={{marginTop: '20px', opacity: 0.5}} 
                        />
                    </div>
                )}
            </div>
        )}
      </div>
    </div>
  );
};

export default DictionaryPage;