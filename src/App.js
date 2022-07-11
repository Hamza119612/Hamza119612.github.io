import logo from "./logo.svg";
import "./App.css";
import FullPage from "./components/FullPage";
import PageImage from "./assets/images/image1.jpg";

function App() {
  return (
    <div className="App">
      <img src={PageImage} alt="Image" />
    </div>
  );
}

export default App;
