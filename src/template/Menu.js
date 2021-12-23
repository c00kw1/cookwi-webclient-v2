import { useState } from "react";
import { Link } from "react-router-dom";
import Hamburger from "../shared/Hamburger";
import styles from "./Menu.module.css";

function Menu() {
  const [showMenu, setShowMenu] = useState(false);

  const toogleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <>
      <Hamburger onClick={toogleMenu} />
      <div
        className={styles.lemenu}
        style={{ visibility: showMenu ? "visible" : "hidden" }}
      >
        <Link to="/recipes">Recipes</Link>
        <br />
        Hoy
        <br />
        Huy
      </div>
    </>
  );
}

export default Menu;
