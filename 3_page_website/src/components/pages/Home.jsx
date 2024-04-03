import React from "react";
import "./Home.css";
import BannerImage from "./trade.jpg";

export const Home = () => {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1>TradeSphere</h1>
        <br></br>
        <br></br>
        <p className="tagline">TRADE SMART, EARN BIG WITH TradeSphere</p>
        <br></br>
        <button className="startButton">Start Trading!</button>
      </div>
      <div className="content">
        <div className="features">
          <h2>Why Trade with TradeSphere?</h2>
          <div className="featureItem">
            <h3>Advanced Tools</h3>
            <p>Access powerful trading tools for analysis and execution.</p>
          </div>
          <div className="featureItem">
            <h3>Real-time Data</h3>
            <p>Stay updated with real-time market data and insights.</p>
          </div>
          <div className="featureItem">
            <h3>24/7 Support</h3>
            <p>Get expert support round the clock for your trading needs.</p>
          </div>
        </div>
        <div className="testimonial">
          <h2>What Our Traders Say</h2>
          <p>
            "TradeSphere helped me maximize my profits. Highly recommended!"
          </p>
          <p>- John Doe, Experienced Trader</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
