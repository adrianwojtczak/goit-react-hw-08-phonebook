import { NavLink } from 'react-router-dom';
import styles from './AuthNavigation.module.css';

const AuthNavigation = () => {
  return (
    <div>
      <NavLink className={styles.link} to="/register">
        Register
      </NavLink>
      <NavLink className={styles.link} to="/login">
        Log In
      </NavLink>
    </div>
  );
};

export default AuthNavigation;
