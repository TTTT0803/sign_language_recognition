// src/App.jsx
import { Routes, Route } from 'react-router-dom'; // <-- 1. Xóa 'BrowserRouter' khỏi dòng import
import Layout from './components/layout/Layout';
import Homepage from './pages/HomePage';
import './App.css';

function App() {
  return (
    // 2. Xóa <BrowserRouter> bọc ngoài
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        {/* <Route path="su-dung" element={...} /> */}
      </Route>
    </Routes>
    // Xóa </BrowserRouter> ở đây
  );
}

export default App;