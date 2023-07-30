import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import AppBar from 'components/AppBar/AppBar';

import styles from './SharedLayout.module.css';

const SharedLayout = () => {
  return (
    <div className={styles.container}>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default SharedLayout;
