import "./Title.css";

function Title(props) {
  var height = "";
  var right = "";
  var bottom = "";
  switch (props.children.type) {
    case "h2":
      height = "5px";
      right = "38px";
      bottom = "18px";
      break;
    case "h3":
      height = "4px";
      right = "28px";
      bottom = "15px";
      break;
    case "h4":
      height = "3px";
      right = "20px";
      bottom = "10px";
      break;
    default:
      height = "7px";
      right = "50px";
      bottom = "15px";
      break;
  }

  return (
    <div className="title">
      {props.children}
      <span
        className="title__underline"
        style={{ height: height, right: right, bottom: bottom }}
      ></span>
    </div>
  );
}

export default Title;
