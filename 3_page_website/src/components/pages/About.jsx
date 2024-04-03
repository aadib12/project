import React from "react";
import "./About.css";

export const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About TradeSphere</h1>
      </div>
      <div className="about-content">
        <p>
          <span className="highlight">TradeSphere</span> is not just another
          trading platform. We are a community of traders, investors, and
          experts dedicated to helping you succeed in the financial markets.
        </p>
        <p>
          Our mission is to provide you with the tools, resources, and support
          you need to make informed investment decisions and achieve your
          financial goals.
        </p>
        <br></br>
        <p>
          <b>
            As we continue to evolve and grow, please note that TradeSphere is
            currently in beta testing phase, which means we are still developing
            new features and refining our platform to better serve you."
          </b>
        </p>
      </div>
    </div>
  );
};

export default About;
