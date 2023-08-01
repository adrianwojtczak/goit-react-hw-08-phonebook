import styles from './HomePage.module.css';
import homeImage from '../../images/homepage.jpg';

const HomePage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to Phonebook M'Lord </h1>
      <img
        className={styles.img}
        src={homeImage}
        alt="Scribe"
        width="500"
        height="600"
      />
    </div>
  );
};

export default HomePage;
