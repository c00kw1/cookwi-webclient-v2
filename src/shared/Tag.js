import styles from "./Tag.module.css";

const Tag = (props) => {
  return (
    <div className={styles.tag}>
      <span className={styles.text}>{props.children}</span>
    </div>
  );
};

export default Tag;
