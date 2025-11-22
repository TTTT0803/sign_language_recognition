import React, { useState, useEffect } from 'react';
import styles from './UsePage.module.css';
import { FaVolumeUp, FaVolumeMute, FaBackspace, FaSpaceShuttle, FaPlus, FaPlayCircle } from 'react-icons/fa';

const UsePage = () => {
  const [detectedText, setDetectedText] = useState("...");
  const [sentence, setSentence] = useState(""); // <--- Biến lưu câu đang ghép
  const [isSoundOn, setIsSoundOn] = useState(true);

  const VIDEO_STREAM_URL = "http://localhost:5000/video_feed";
  const STATUS_API_URL = "http://localhost:5000/api/status";

  // --- HÀM ĐỌC (Text to Speech) ---
  const speak = (text) => {
    if (!isSoundOn || !text) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US'; 
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
  };

  // --- 1. HÀM THÊM CHỮ VÀO CÂU ---
  const addLetterToSentence = () => {
    if (detectedText !== "..." && detectedText !== "") {
        setSentence(prev => prev + detectedText);
        speak(detectedText); // Đọc chữ vừa thêm
    }
  };

  // --- 2. HÀM THÊM KHOẢNG TRẮNG ---
  const addSpace = () => {
    setSentence(prev => prev + " ");
  };

  // --- 3. HÀM XÓA KÝ TỰ CUỐI ---
  const deleteLastChar = () => {
    setSentence(prev => prev.slice(0, -1));
  };

  // --- 4. HÀM ĐỌC CẢ CÂU ---
  const speakSentence = () => {
    speak(sentence);
  };

  // --- LẤY DỮ LIỆU TỪ PYTHON ---
  useEffect(() => {
    const intervalId = setInterval(async () => {
      try {
        const response = await fetch(STATUS_API_URL);
        const data = await response.json();
        setDetectedText(data.text);
      } catch (error) {
        console.error("Lỗi kết nối Backend");
      }
    }, 500);

    return () => clearInterval(intervalId);
  }, []);

  // --- XỬ LÝ PHÍM TẮT (Cho tiện dụng) ---
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === 'Space') {
        // Bấm phím CÁCH để thêm chữ hiện tại vào câu
        e.preventDefault(); // Chặn cuộn trang
        addLetterToSentence();
      }
      if (e.code === 'Enter') {
        // Bấm ENTER để thêm khoảng trắng
        addSpace();
      }
      if (e.code === 'Backspace') {
        // Bấm XÓA để xóa chữ
        deleteLastChar();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [detectedText]); // Cập nhật để lấy đúng detectedText hiện tại

  return (
    <div className={styles.usePageContainer}>
      
      {/* CỘT TRÁI: CAMERA */}
      <div className={styles.videoColumn}>
        <img 
          src={VIDEO_STREAM_URL} 
          alt="Camera ASL"
          style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '15px', border: '2px solid #333' }} 
        />
        
        {/* Nút Loa */}
        <button 
          onClick={() => setIsSoundOn(!isSoundOn)}
          style={{ position: 'absolute', top: '20px', right: '20px', padding: '10px', borderRadius: '50%', border: 'none', backgroundColor: 'rgba(0,0,0,0.6)', color: 'white', cursor: 'pointer', fontSize: '20px' }}
        >
          {isSoundOn ? <FaVolumeUp /> : <FaVolumeMute />}
        </button>
      </div>

      {/* CỘT PHẢI: KẾT QUẢ & GHÉP CÂU */}
      <div className={styles.resultsColumn}>
        <div className={styles.resultsPanel} style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: '20px' }}>
          
          {/* PHẦN 1: AI ĐANG NHÌN THẤY GÌ */}
          <div style={{ flex: 1, textAlign: 'center', borderBottom: '1px solid #ccc' }}>
            <h3 style={{ color: '#888' }}>AI Đang Thấy:</h3>
            <p style={{ fontSize: '100px', fontWeight: 'bold', color: '#007bff', margin: '10px 0' }}>
              {detectedText}
            </p>
            <p style={{ fontStyle: 'italic', fontSize: '14px' }}>Bấm phím <b>SPACE</b> để chọn chữ này</p>
          </div>

          {/* PHẦN 2: CÂU ĐANG GHÉP (NỐI CHỮ) */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h3 style={{ color: '#555' }}>Câu Của Bạn:</h3>
            
            {/* Ô hiển thị câu */}
            <div style={{ 
                minHeight: '60px', 
                backgroundColor: '#f8f9fa', 
                border: '2px dashed #007bff', 
                borderRadius: '10px', 
                padding: '10px',
                fontSize: '24px',
                fontWeight: 'bold',
                marginBottom: '20px',
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap'
            }}>
                {sentence || <span style={{color: '#ccc', fontWeight: 'normal'}}>Chưa có nội dung...</span>}
            </div>

            {/* CÁC NÚT ĐIỀU KHIỂN */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                
                <button onClick={addLetterToSentence} style={btnStylePrimary}>
                    <FaPlus /> Thêm Chữ ({detectedText})
                </button>

                <button onClick={addSpace} style={btnStyleSecondary}>
                    ␣ Khoảng Cách
                </button>

                <button onClick={deleteLastChar} style={btnStyleDanger}>
                    <FaBackspace /> Xóa Ký Tự
                </button>

                <button onClick={speakSentence} style={btnStyleSuccess}>
                    <FaPlayCircle /> Đọc Cả Câu
                </button>

                 <button onClick={() => setSentence("")} style={{...btnStyleDanger, gridColumn: 'span 2'}}>
                    Xóa Hết
                </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

// --- CSS Nhanh (Bạn có thể đưa vào file module.css) ---
const btnStylePrimary = { padding: '10px', cursor: 'pointer', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px' };
const btnStyleSecondary = { padding: '10px', cursor: 'pointer', backgroundColor: '#6c757d', color: 'white', border: 'none', borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px' };
const btnStyleDanger = { padding: '10px', cursor: 'pointer', backgroundColor: '#dc3545', color: 'white', border: 'none', borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px' };
const btnStyleSuccess = { padding: '10px', cursor: 'pointer', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px' };

export default UsePage;