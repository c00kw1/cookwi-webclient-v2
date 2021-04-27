import "./App.css";
import Topbar from "./components/Topbar";
import Footer from "./components/Footer";
import Home from "./home/Home";

function App() {
  return (
    <div className="App">
      <Topbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
