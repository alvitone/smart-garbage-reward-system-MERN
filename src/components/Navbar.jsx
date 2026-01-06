
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState, useRef, useEffect } from "react";
import "./Navbar.css";
import logo from "../assets/Happy.png";

export default function Navbar() {
  const { isAuthenticated, logout, token } = useAuth();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const popupRef = useRef(null);

  const userEmail = token
    ? (() => {
        try {
          const payload = JSON.parse(atob(token.split(".")[1]));
          return payload.email;
        } catch {
          return null;
        }
      })()
    : null;

  const handleLogout = () => {
    logout();
    setOpen(false);
    navigate("/login");
  };

  // close popup on outside click
  useEffect(() => {
    const handler = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <header id="header" className="d-flex align-items-center fixed-top">
      <div className="container d-flex align-items-center justify-content-between">

        {/* EXISTING LOGO */}
        <h1 className="logo">
          <Link to="/">Smart Garbage Reward System</Link>
        </h1>

        <Link to="/" className="logo">
          <img src={logo} alt="Smart Garbage Reward System" height="40" />
        </Link>

        {/* EXISTING NAV */}
        <nav className="navbar d-flex align-items-center">
          <ul>
            <li><Link className="nav-link" to="/">Home</Link></li>
            <li><Link className="nav-link" to="/register">Register</Link></li>
            <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
            <li><Link className="nav-link" to="/user">User</Link></li>
             <li><Link className="nav-link" to="/shop">Shop</Link></li>
          </ul>

          {/* ✅ ADD THIS BLOCK ONLY */}
           <div className="user-wrapper" ref={popupRef}>
            <button
              className="user-avatar"
              onClick={() => setOpen(!open)}
            >
              {isAuthenticated ? userEmail?.[0]?.toUpperCase() : "👤"}
            </button>

            {open && (
              <div className="user-popup">
                {!isAuthenticated ? (
                  <button
                    className="popup-btn primary"
                    onClick={() => navigate("/login")}
                  >
                    Sign In
                  </button>
                ) : (
                  <>
                    <div className="popup-email">{userEmail}</div>
                    <hr />
                    <button
                      className="popup-btn danger"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </>
                )}
              </div>
            )}
          </div>
          {/* ✅ END ADDITION */}

        </nav>
      </div>
    </header>
  );
}
