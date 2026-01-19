import { Link, useNavigate  } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
    window.location.reload(); // refresh UI state
  };

  return (
    <div style={styles.navbar}>
      <h3 style={styles.logo}>🌱 Carbon Tracker</h3>

      <div style={styles.links}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/transport" style={styles.link}>Calculations</Link>
        <Link to="/info" style={styles.link}>Information</Link>
        <Link to="/about" style={styles.link}>About</Link>

        {!token ? (
          <>
            <Link to="/login" style={styles.link}>Login</Link>
            <Link to="/register" style={styles.link}>Create Account</Link>
          </>
        ) : (
          <button onClick={logout} style={styles.logout}>Logout</button>
        )}
      </div>
    </div>
  );
}

const styles = {
  navbar: {
    background: "#0f7c0f",
    padding: "15px 30px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "white"
  },
  logo: { 
    margin: 0,
    color: "white",
    fontSize: "20px",
    fontWeight: "bold",
    textDecoration: "none"
  },
  links: { display: "flex", gap: "20px", alignItems: "center" },
  link: { color: "white", textDecoration: "none", fontWeight: "bold", marginLeft: "30px" },
  logout: {
    background: "#fff",
    color: "#0f7c0f",
    border: "none",
    padding: "6px 12px",
    cursor: "pointer",
    fontWeight: "bold"
  }
};
export default Navbar;
