// src/components/layout/Layout/index.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header'; // Import từ thư mục Header
import Footer from '../Footer'; // Import từ thư mục Footer

const Layout = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;