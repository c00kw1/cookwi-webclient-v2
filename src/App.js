import styles from "./App.module.css";
import Topbar from "./template/Topbar";
import Footer from "./template/Footer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/home/Home";
import ComponentsList from "./pages/components-list/ComponentsList";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <div className={styles.app}>
        <div className={styles.main}>
          <Topbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/clist">
              <ComponentsList />
            </Route>
            <Route path="*">
              <PageNotFound />
            </Route>
          </Switch>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
