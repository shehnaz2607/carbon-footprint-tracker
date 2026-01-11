function Result() {
  const total =
    Number(localStorage.getItem("transport")) +
    Number(localStorage.getItem("diet")) +
    Number(localStorage.getItem("energy"));

  return (
    <div className="container">
      <h2>Total Carbon Footprint</h2>
      <h1>{total.toFixed(2)} kg CO₂</h1>
      <p>Thank you for tracking your emissions 🌱</p>
    </div>
  );
}

export default Result;
