import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import jsPDF from "jspdf";
import { motion } from "framer-motion";

ChartJS.register(ArcElement, Tooltip, Legend);

function Result() {
  const transport = Number(localStorage.getItem("transport"));
  const diet = Number(localStorage.getItem("diet"));
  const energy = Number(localStorage.getItem("energy"));

  const total = transport + diet + energy;

  const data = {
    labels: ["Transport", "Diet", "Energy"],
    datasets: [
      {
        data: [transport, diet, energy],
        backgroundColor: ["#2ecc71", "#27ae60", "#badc58"]
      }
    ]
  };

  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.text("Carbon Footprint Report", 20, 20);
    doc.text(`Transport: ${transport.toFixed(2)} kg CO₂`, 20, 40);
    doc.text(`Diet: ${diet.toFixed(2)} kg CO₂`, 20, 50);
    doc.text(`Energy: ${energy.toFixed(2)} kg CO₂`, 20, 60);
    doc.text(`Total: ${total.toFixed(2)} kg CO₂`, 20, 80);
    doc.save("carbon-footprint-report.pdf");
  };

  return (
    <motion.div
      className="container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h2>Total Carbon Footprint 🌍</h2>
      <h1>{total.toFixed(2)} kg CO₂</h1>

      <div style={{ width: "300px" }}>
        <Pie data={data} />
      </div>

      <button onClick={downloadPDF}>Download PDF Report</button>
    </motion.div>
  );
}

export default Result;
