import styles from "./RecipeInfo.module.css";
import {
  faClock,
  faFireAlt,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RecipeInfo = (props) => {
  let icon;
  switch (props.type) {
    case "baking":
      icon = faFireAlt;
      break;
    case "portions":
      icon = faUtensils;
      break;
    default:
      icon = faClock;
      break;
  }

  return (
    <div className={styles.recipeinfo}>
      <FontAwesomeIcon className={styles.icon} icon={icon} />
      <span className={styles.text}>{props.children}</span>
    </div>
  );
};

export default RecipeInfo;
