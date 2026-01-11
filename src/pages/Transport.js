import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Transport() {
  const [miles, setMiles] = useState(0);
  const [vehicle, setVehicle] = useState("car");
  const navigate = useNavigate();

  const calculate = () => {
    const factors = {
      car: 0.404,
      bike: 0.113,
      public: 0.089
    };
    const emission = miles * factors[vehicle];
    localStorage.setItem("transport", emission);
    navigate("/diet");
  };

  return (
    <div className="container">
      <h2>Transport Emissions</h2>

      <input
        type="number"
        placeholder="Miles driven per week"
        onChange={(e) => setMiles(e.target.value)}
      />

      <select onChange={(e) => setVehicle(e.target.value)}>
        <option value="car">Private Car</option>
        <option value="bike">Bike</option>
        <option value="public">Public Transport</option>
      </select>

      <button onClick={calculate}>Next</button>
    </div>
  );
}

export default Transport;
