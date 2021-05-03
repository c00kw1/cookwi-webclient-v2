import "./Card.css";

function Card(props) {
  return (
    <div
      className="card"
      style={{
        width: props.width ?? "fit-content",
        height: props.height ?? "fit-content",
      }}
    >
      {props.children}
    </div>
  );
}

export default Card;
