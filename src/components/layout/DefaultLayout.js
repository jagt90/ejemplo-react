import React from 'react';
import { Outlet } from 'react-router-dom';

import Footer from './Footer';
import Navbar from './Navbar';
import PageContent from './PageContent';

const DefaultLayout = () => {
  return (
    <>
      <Navbar />
      <PageContent>
        <Outlet />
      </PageContent>
      <Footer />
    </>
  );
};

export default DefaultLayout;
