// src/App.jsx
import { Routes, Route } from 'react-router-dom'; // <-- 1. Xóa 'BrowserRouter' khỏi dòng import
import Layout from './components/layout/Layout';
import Homepage from './pages/HomePage';
import './App.css';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import UsePage from './pages/UsePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path='/dangnhap' element={<LoginPage />} />
        <Route path='/dang-ky' element={<RegisterPage />} />
        <Route path='/su-dung' element={<UsePage />} />
      </Route>
    </Routes>
  );
}

export default App;