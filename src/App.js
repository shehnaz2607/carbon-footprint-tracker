import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Transport from "./pages/Transport";
import Diet from "./pages/Diet";
import Energy from "./pages/Energy";
import Result from "./pages/Result";
import Information from "./pages/Information";
import About from "./pages/About";

import "./App.css";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/transport" element={<Transport />} />
        <Route path="/diet" element={<Diet />} />
        <Route path="/energy" element={<Energy />} />
        <Route path="/result" element={<Result />} />
        <Route path="/info" element={<Information />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
