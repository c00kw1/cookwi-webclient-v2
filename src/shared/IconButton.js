import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./IconButton.module.css";

const IconButton = (props) => {
  let color;
  let size;

  switch (props.color) {
    case "accent":
      color = styles.accent;
      break;
    case "third":
      color = styles.third;
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
    <div className={`${styles.iconbutton} ${color} ${size}`}>
      <FontAwesomeIcon icon={props.icon} />
    </div>
  );
};

export default IconButton;
