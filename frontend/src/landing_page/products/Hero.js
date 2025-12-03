import React from "react";

const Hero = () => {
  return (
    <div className="container mt-5 mb-5 ">
      <div className="row text-center fs-6 mt-5 ">
        <h2>Zerodha Products</h2>
        <p className="text-muted fs-5 ">Sleek, modern, and intuitive trading platforms</p>
        <p className="text-muted mb-5 lh-1">
          Check out our <a href="#" style={{textDecoration:"none"}}>investment offerings <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
        </p>
        <hr></hr>
      </div>
    </div>
  );
};

export default Hero;
