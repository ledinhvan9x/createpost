import React, { memo } from 'react';
import Header from 'components/Layout/Header/Header';
import Footer from 'components/Layout/Footer/Footer';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default memo(Layout);
