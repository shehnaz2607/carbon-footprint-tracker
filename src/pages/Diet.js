import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Diet() {
  const [veg, setVeg] = useState(0);
  const [nonVeg, setNonVeg] = useState(0);
  const navigate = useNavigate();

  const calculate = () => {
    const emission = (veg * 1.2) + (nonVeg * 2.5);
    localStorage.setItem("diet", emission);
    navigate("/energy");
  };

  return (
    <div className="container">
      <h2>Diet Emissions</h2>

      <input
        type="number"
        placeholder="Veg meals per week"
        onChange={(e) => setVeg(e.target.value)}
      />

      <input
        type="number"
        placeholder="Non-veg meals per week"
        onChange={(e) => setNonVeg(e.target.value)}
      />

      <button onClick={calculate}>Next</button>
    </div>
  );
}

export default Diet;
