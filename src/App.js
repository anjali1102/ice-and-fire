import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Another } from "./Routes/Another/Another";
import { Home } from "./Routes/Home/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/another" element={<Another />} />
        <Route />
      </Routes>
    </div>
  );
}

export default App;
