import React from "react";

import Footer from "./Footer.jsx";
import "./css/HomePage.css";



function HomePage() {
  return (
    <div>
      <div className="landing-container">
      <div className="background-overlay"></div>
      
      <div className="content-container">
        <h1 className="main-heading">
          Welcome to Train Delay Prediction By Using ML
        </h1>

        <p className="subheading">
        "Welcome to Train Delay Prediction using Machine Learning – simplifying travel with accurate delay forecasts!".
        </p>

        
      </div>

    </div>
    
     
      <Footer />
    </div>
  );
}
export default HomePage;
