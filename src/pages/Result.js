import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import jsPDF from "jspdf";
import { motion } from "framer-motion";

ChartJS.register(ArcElement, Tooltip, Legend);

function Result() {
  const transport = Number(localStorage.getItem("transport") || 0);
  const diet = Number(localStorage.getItem("diet") || 0);
  const energy = Number(localStorage.getItem("energy") || 0);

  const total = transport + diet + energy;

  const indiaAvg = 1900;
  const worldAvg = 4800;

  const chartData = {
    labels: ["Transport", "Diet", "Energy"],
    datasets: [
      {
        data: [transport, diet, energy],
        backgroundColor: ["#4CAF50", "#FF9800", "#2196F3"],
      },
    ],
  };

  const downloadPDF = () => {
    const pdf = new jsPDF();
    pdf.text("Carbon Footprint Report", 20, 20);
    pdf.text(`Transport: ${transport.toFixed(2)} kg CO₂`, 20, 40);
    pdf.text(`Diet: ${diet.toFixed(2)} kg CO₂`, 20, 50);
    pdf.text(`Energy: ${energy.toFixed(2)} kg CO₂`, 20, 60);
    pdf.text(`Total: ${total.toFixed(2)} kg CO₂`, 20, 80);
    pdf.save("carbon-footprint-report.pdf");
  };

  return (
    <motion.div
      className="page result-page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1>🌍 Your Carbon Footprint</h1>

      <div className="summary-card">
        <h2>{total.toFixed(2)} kg CO₂ / year</h2>
        <p>Estimated annual emissions</p>
      </div>

      <div className="grid">
        <div className="card">
          <h3>🚗 Transport</h3>
          <p>{transport.toFixed(2)} kg CO₂</p>
        </div>

        <div className="card">
          <h3>🍽️ Diet</h3>
          <p>{diet.toFixed(2)} kg CO₂</p>
        </div>

        <div className="card">
          <h3>⚡ Energy</h3>
          <p>{energy.toFixed(2)} kg CO₂</p>
        </div>
      </div>

      <div className="chart-card">
        <Pie data={chartData} />
      </div>

      <div className="comparison">
        <div className="compare-card">
          <h4>Your Footprint</h4>
          <p>{total.toFixed(0)} kg</p>
        </div>

        <div className="compare-card">
          <h4>India Average</h4>
          <p>{indiaAvg} kg</p>
        </div>

        <div className="compare-card">
          <h4>World Average</h4>
          <p>{worldAvg} kg</p>
        </div>
      </div>

      <button className="primary-btn" onClick={downloadPDF}>
        Download PDF Report
      </button>
    </motion.div>
  );
}

export default Result;
