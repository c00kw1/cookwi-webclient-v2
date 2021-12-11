import styles from "./Logo.module.css";

const Logo = () => {
  return (
    <div className={styles.logo}>
      <img
        className={styles.image}
        src="images/cookwi/200_base.png"
        alt="Cookwi logo"
      />
      <span className={styles.text}>Cookwi</span>
    </div>
  );
};

export default Logo;
