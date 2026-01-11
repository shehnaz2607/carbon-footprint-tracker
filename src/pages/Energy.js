import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Energy() {
  const [kwh, setKwh] = useState(0);
  const [renewable, setRenewable] = useState(false);
  const navigate = useNavigate();

  const calculate = () => {
    let emission = kwh * 0.82;
    if (renewable) emission *= 0.6;
    localStorage.setItem("energy", emission);
    navigate("/result");
  };

  return (
    <div className="container">
      <h2>Energy Emissions</h2>

      <input
        type="number"
        placeholder="Monthly electricity usage (kWh)"
        onChange={(e) => setKwh(e.target.value)}
      />

      <select onChange={(e) => setRenewable(e.target.value === "yes")}>
        <option value="no">No Renewable Energy</option>
        <option value="yes">Uses Renewable Energy</option>
      </select>

      <button onClick={calculate}>Calculate</button>
    </div>
  );
}

export default Energy;
