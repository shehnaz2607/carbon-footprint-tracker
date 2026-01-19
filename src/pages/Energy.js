import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Energy() {
  const [electricity, setElectricity] = useState("");
  const navigate = useNavigate();

  const handleNext = () => {
    const energyEmission = electricity ? electricity * 0.82 : 0;
    localStorage.setItem("energy", energyEmission);

    // 🔥 THIS LINE WAS MISSING
    navigate("/result");
  };

  return (
    <div className="page">
      <div className="card">
        <h2>⚡ Energy Usage</h2>

        <input
          type="number"
          placeholder="Electricity units (kWh)"
          value={electricity}
          onChange={(e) => setElectricity(e.target.value)}
        />

        <button className="primary-btn" onClick={handleNext}>
          View Result
        </button>
      </div>
    </div>
  );
}

export default Energy;
