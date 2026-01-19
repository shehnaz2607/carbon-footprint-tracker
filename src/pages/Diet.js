import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Diet() {
  const [meals, setMeals] = useState(0);
  const navigate = useNavigate();

  const next = () => {
    const emission = meals * 2.5;
    localStorage.setItem("diet", emission);
    navigate("/energy");
  };

  return (
    <div className="page card">
      <h2>🍽️ Diet Emissions</h2>

      <input
        type="number"
        placeholder="Non-veg meals per week"
        onChange={(e) => setMeals(e.target.value)}
      />

      <button onClick={next}>Next →</button>
    </div>
  );
}

export default Diet;
