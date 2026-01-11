import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Home() {
  const navigate = useNavigate();

  return (
    <motion.div
      className="container"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1>Track Your Carbon Emissions 🌱</h1>
      <p>Calculate your carbon footprint based on lifestyle choices</p>
      <button onClick={() => navigate("/transport")}>
        Start Calculation
      </button>
    </motion.div>
  );
}

export default Home;
