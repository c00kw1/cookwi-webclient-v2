import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../shared/Logo";
import styles from "./Topbar.module.css";
import { Link } from "react-router-dom";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import Menu from "./Menu";

function Topbar() {
  return (
    <div className={styles.topbar}>
      <div className={styles.logo}>
        <Link to="/">
          <Logo />
        </Link>
      </div>
      {/* <div className={styles.account}>
        <Link to="/login">
          <FontAwesomeIcon icon={faSignInAlt} />
        </Link>
      </div> */}
    </div>
  );
}

export default Topbar;
