import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CareerLevels from "./pages/CareerLevels";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/career/:careerId" element={<CareerLevels />} />
    </Routes>
  );
}

export default App;
