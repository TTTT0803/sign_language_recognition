import React from 'react';
import { Outlet } from 'react-router-dom'; // <-- Chỗ trống cho nội dung
import Header from '../Header';
import Footer from '../Footer';

function Layout() {
  return (
    <>
      <Header />
      <main>
        {/* HomePage sẽ "nhảy" vào đây */}
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;