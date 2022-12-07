import "./App.css";
import FlipTimmer from "./components/timmer/FlipTimmer";
import Clock from "./components/analog/Clock";

function App() {
  return (
    <div className="App">
      <Clock />
      <FlipTimmer />
    </div>
  );
}

export default App;
