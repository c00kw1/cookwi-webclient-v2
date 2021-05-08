import styles from "./Button.module.css";

const Button = (props) => {
  let color;
  let size;

  switch (props.color) {
    case "accent":
      color = styles.accent;
      break;
    default:
      color = styles.primary;
      break;
  }

  switch (props.size) {
    case "medium":
      size = styles.medium;
      break;
    default:
      size = "";
      break;
  }

  return (
    <button className={`${styles.button} ${color} ${size}`}>
      {props.children}
    </button>
  );
};

export default Button;
