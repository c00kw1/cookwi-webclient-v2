import styles from "./Card.module.css";

function Card(props) {
  return (
    <div
      className={styles.card}
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
