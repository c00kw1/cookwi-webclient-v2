import styles from "./Title.module.css";

function Title(props) {
  var width = "";
  var height = "";
  var right = "";
  var bottom = "";
  switch (props.children.type) {
    case "h2":
      width = "80px";
      height = "5px";
      right = "38px";
      bottom = "18px";
      break;
    case "h3":
      width = "60px";
      height = "4px";
      right = "28px";
      bottom = "15px";
      break;
    case "h4":
      width = "40px";
      height = "3px";
      right = "20px";
      bottom = "10px";
      break;
    default:
      width = "105px";
      height = "7px";
      right = "50px";
      bottom = "15px";
      break;
  }

  return (
    <div className={styles.title}>
      {props.children}
      <span
        className={styles.underline}
        style={{ width: width, height: height, right: right, bottom: bottom }}
      ></span>
    </div>
  );
}

export default Title;
