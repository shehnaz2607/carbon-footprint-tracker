import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Transport() {
  const [distance, setDistance] = useState(0);
  const navigate = useNavigate();

  const next = () => {
    const emission = distance * 0.4;
    localStorage.setItem("transport", emission);
    navigate("/diet");
  };

  return (
    <div className="page card">
      <h2>🚗 Transport Emissions</h2>

      <input
        type="number"
        placeholder="Km travelled per week"
        onChange={(e) => setDistance(e.target.value)}
      />

      <button onClick={next}>Next →</button>
    </div>
  );
}

export default Transport;
