import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Diet() {
  const [veg, setVeg] = useState(0);
  const [nonVeg, setNonVeg] = useState(0);
  const navigate = useNavigate();

  const calculate = () => {
    const emission = veg * 1.2 + nonVeg * 2.5;
    localStorage.setItem("diet", emission);
    navigate("/energy");
  };

  return (
    <motion.div
      className="container"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2>Diet Emissions 🍽️</h2>

      <input
        type="number"
        placeholder="Veg meals per week"
        onChange={(e) => setVeg(Number(e.target.value))}
      />

      <input
        type="number"
        placeholder="Non-veg meals per week"
        onChange={(e) => setNonVeg(Number(e.target.value))}
      />

      <button onClick={calculate}>Next</button>
    </motion.div>
  );
}

export default Diet;
