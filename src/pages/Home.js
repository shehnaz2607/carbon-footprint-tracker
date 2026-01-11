import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1>Track Your Carbon Emissions</h1>
      <p>Calculate your carbon footprint based on lifestyle choices</p>
      <button onClick={() => navigate("/transport")}>
        Start Calculation
      </button>
    </div>
  );
}

export default Home;
