import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Energy() {
  const [kwh, setKwh] = useState(0);
  const [renewable, setRenewable] = useState(false);
  const [country, setCountry] = useState("India");
  const navigate = useNavigate();

  const countryFactors = {
    India: 0.82,
    USA: 0.45,
    Germany: 0.32
  };

  const calculate = () => {
    let emission = kwh * countryFactors[country];
    if (renewable) emission *= 0.6;
    localStorage.setItem("energy", emission);
    navigate("/result");
  };

  return (
    <motion.div
      className="container"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2>Energy Emissions ⚡</h2>

      <input
        type="number"
        placeholder="Monthly electricity usage (kWh)"
        onChange={(e) => setKwh(Number(e.target.value))}
      />

      <select onChange={(e) => setCountry(e.target.value)}>
        <option value="India">India</option>
        <option value="USA">USA</option>
        <option value="Germany">Germany</option>
      </select>

      <select onChange={(e) => setRenewable(e.target.value === "yes")}>
        <option value="no">No Renewable Energy</option>
        <option value="yes">Uses Renewable Energy</option>
      </select>

      <button onClick={calculate}>Calculate</button>
    </motion.div>
  );
}

export default Energy;
