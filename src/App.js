import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Transport from "./pages/Transport";
import Diet from "./pages/Diet";
import Energy from "./pages/Energy";
import Result from "./pages/Result";
import "./App.css";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/transport" element={<Transport />} />
        <Route path="/diet" element={<Diet />} />
        <Route path="/energy" element={<Energy />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
