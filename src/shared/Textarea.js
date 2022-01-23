import styles from "./Textarea.module.css";

const Textarea = (props) => {
  return (
    <textarea
      className={styles.textarea}
      placeholder={props.placeholder}
    ></textarea>
  );
};

export default Textarea;
