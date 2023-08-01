import Navigation from 'components/Navigation/Navigation';
import AuthNavigation from 'components/AuthNavigation/AuthNavigation';
import UserMenu from 'components/UserMenu/UserMenu';

import { useAuth } from 'hooks';

import styles from './AppBar.module.css';

const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <header className={styles.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNavigation />}
    </header>
  );
};

export default AppBar;
