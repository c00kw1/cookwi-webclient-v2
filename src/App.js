import "./App.css";
import Topbar from "./template/Topbar";
import Footer from "./template/Footer";
import { Link, Outlet } from "react-router-dom";
import { push as Menu } from "react-burger-menu";

function App() {
  return (
    <div id="outer-container">
      <Menu pageWrapId={"page-wrap"} outerContainerId={"outer-container"}>
        <Link to="/">Home</Link>
        <Link to="/recipes">Recipes</Link>
        <Link to="/components">Components</Link>
      </Menu>
      <main id="page-wrap">
        <Topbar />
        <Outlet />
        <Footer />
      </main>
    </div>
  );
}

export default App;
