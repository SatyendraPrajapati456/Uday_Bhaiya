import React from "react";
import "./Sign_in.css"; // Importing external CSS file
import { Link } from "react-router-dom"; // Importing Link component from react-router-dom

const Signup = () => {
  return (
    <div className="container">
      {/* Left Section */}
      <div className="left-section">
        <img
          src="https://cdn.leonardo.ai/users/d3b4529e-9b7a-46c7-99ef-607d375521af/generations/59fac0fb-0c8b-45e4-bdda-e813ed060fbf/Leonardo_Phoenix_10_A_breathtaking_animestyle_illustration_of_3.jpg"
          alt="Background"
          className="bg-image"
        />
        <div className="overlay-text">
          <h2>
            Save Earth, <br /> To Save Future Generations
          </h2>
        </div>
      </div>

      {/* Right Section */}
      <div className="right-section">
        <h2>Create an account</h2>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>

        <form>
          <div className="name-fields">
            <input
              type="text"
              placeholder="First name"
              className="input-field"
            />
            <input
              type="text"
              placeholder="Last name"
              className="input-field"
            />
          </div>
          <input
            type="email"
            placeholder="Email"
            className="input-field full-width"
          />
          <input
            type="password"
            placeholder="Enter your password"
            className="input-field full-width"
          />

          <div className="checkbox-container">
            <input type="checkbox" id="terms" />
            <label htmlFor="terms">
              I agree to the <a href="#">Terms & Conditions</a>
            </label>
          </div>

          <button className="signup-btn">Create account</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
