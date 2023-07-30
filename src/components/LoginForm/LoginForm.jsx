import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import styles from './LoginForm.module.css';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = ev => {
    ev.preventDefault();
    const form = ev.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={styles.label}>
        Email
        <input
          type="email"
          name="email"
          placeholder="Enter your email address"
        />
      </label>
      <label className={styles.label}>
        Password
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
        />
      </label>
      <button type="submit">Log In</button>
    </form>
  );
};

export default LoginForm;
