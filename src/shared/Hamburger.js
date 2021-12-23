import { useState } from "react";
import styles from "./Hamburger.module.css";

export default function Hamburger(props) {
  const [opened, setOpen] = useState(false);

  const clickHandler = () => {
    setOpen((prev) => !prev);
    props.onClick(opened);
  };

  return (
    <div
      className={`${styles.hamburger} ${opened ? styles.open : ""}`}
      onClick={clickHandler}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}
