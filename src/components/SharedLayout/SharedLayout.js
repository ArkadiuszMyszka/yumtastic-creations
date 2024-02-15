import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import { Layout } from 'components/SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <Layout>
      <Header />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Footer />
    </Layout>
  );
};
