import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="page">
      <img
        src="https://images.unsplash.com/photo-1509395176047-4a66953fd231"
        alt="Carbon footprint"
        className="hero-img"
      />

      <h1>Track Your Carbon Emissions 🌱</h1>

      <p>
        Understand how your daily lifestyle choices impact the environment.
        Calculate your carbon footprint and take steps toward a greener future.
      </p>

      <button className="btn" onClick={() => navigate("/transport")}>
        Start Calculation
      </button>
    </div>
  );
}

export default Home;
