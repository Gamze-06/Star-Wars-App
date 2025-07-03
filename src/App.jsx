import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import StarshipDetail from "./pages/StarshipDetail"; // Detay sayfan

import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/starship/:id" element={<StarshipDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
