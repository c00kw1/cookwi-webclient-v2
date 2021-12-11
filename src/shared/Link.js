import styles from "./Link.module.css";

const Link = (props) => {
  return (
    <a className={styles.link} href={props.href}>
      {props.children}
    </a>
  );
};

export default Link;
