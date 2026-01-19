import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      {/* Top Contact Bar */}
      <div className="top-bar">
        <span className="auth-links">
          You are not logged in&nbsp;
          <Link to="#">Log In</Link> / <Link to="#">Create Account</Link>
        </span>
      </div>

      {/* Main Navigation */}
      <nav className="navbar">
        <Link to="/" className="logo">🌱 Carbon Tracker</Link>
        <div className="nav-links">
          <Link to="/">CARBON CALCULATIONS</Link>
          <Link to="/info">INFORMATION</Link>
          <Link to="/about">ABOUT US</Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
