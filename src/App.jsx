// src/App.jsx
import { Routes, Route } from 'react-router-dom'; // <-- 1. Xóa 'BrowserRouter' khỏi dòng import
import Layout from './components/layout/Layout';
import Homepage from './pages/HomePage';
import './App.css';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import UsePage from './pages/UsePage';
import NewsPage from './pages/NewsPage';
import ContactPage from './pages/ContactPage'
import AboutPage from './pages/AboutPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path='/dangnhap' element={<LoginPage />} />
        <Route path='/dang-ky' element={<RegisterPage />} />
        <Route path='/su-dung' element={<UsePage />} />
        <Route path='/tin-tuc' element={<NewsPage />} /> 
        <Route path='/lien-he' element={<ContactPage />} /> 
        <Route path='/about-me' element={<AboutPage />} /> 
      </Route>
    </Routes>
  );
}

export default App;