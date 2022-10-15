import { Routes, Route } from "react-router-dom";
import "./App.css";
import { House } from "./Routes/House/House";
import { Home } from "./Routes/Home/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/house" element={<House />} />
        <Route />
      </Routes>
    </div>
  );
}

export default App;
