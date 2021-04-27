import { useState } from "react";
import "./Card.css";

function Card(props) {
  const [visible, setVisible] = useState(false);

  function onClickHandler(event) {
    setVisible(!visible);
  }

  return (
    <div
      className="card"
      style={{
        width: props.width ?? "fit-content",
        height: props.height ?? "fit-content",
      }}
    >
      {props.children}
      <button onClick={onClickHandler}>coucou</button>
      <p style={{ display: visible ? "block" : "none" }}>je peux me cacher</p>
    </div>
  );
}

export default Card;
