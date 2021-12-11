import styles from "./Input.module.css";

const Input = (props) => {
  return (
    <input
      className={styles.input}
      placeholder={props.placeholder ?? "Tapez ici"}
      type={props.type ?? "text"}
    />
  );
};

export default Input;
