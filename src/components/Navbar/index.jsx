import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <Link className="link" to="/">
        <button>Home</button>
      </Link>
      <Link className="link" to="">
        <button>About Us</button>
      </Link>
      <Link className="link" to="">
        <button>Contact Us</button>
      </Link>
      <Link className="link" to="/login">
        <button>Sign In</button>
      </Link>
      <Link className="link" to="/profile">
        <button>Profile</button>
      </Link>
      <Link id="Log out" to="/" className="link">
        Logout{" "}
      </Link>
    </nav>
  );
}
