import React from "react";
import { useNavigate, Outlet, Link } from "react-router-dom";
import logo from "../assets/logo2.avif";

function Header() {
  const navigate = useNavigate();

  return (
    <div>
      <header className="header">
        <nav>
          <div className="hero">
            <img
              src={logo}
              alt="Futuristic sustainable city"
              className="logo"
            />
            <ul>
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/about"}>About</Link>
              </li>
              <li>
                <Link to={"/products"}>Products</Link>
              </li>
              <li>
                <Link to={"/contact"}>FeedBack</Link>
              </li>
              <button
                onClick={() => {
                  navigate("/login");
                }}
              >
                LOGIN
              </button>
              <button
                onClick={() => {
                  navigate("/signup");
                }}
              >
                CREATE
              </button>
            </ul>
          </div>
        </nav>
      </header>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Header;
