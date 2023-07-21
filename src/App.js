import "./App.css";
import Customize from "./components/Customize";
import Footer from "./components/Footer";
import Latest from "./components/Latest";
import Unleash from "./components/Unleash";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Unleash />
        <Customize />
        <Latest />
        <Footer />
      </div>
    </div>
  );
}

export default App;
