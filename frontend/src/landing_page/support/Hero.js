import React from "react";

const Hero = () => {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5 mt-5 mb-5" id="supportWrapper">
        <h4> Support Portal</h4>
        <a href="#">Track Tickets</a>
      </div>

      <div className="row p-5 mt-5 mb-5">
        <div className="col-6 p-5 mt-5 mb-5 ">
          <h1>Search for an answer or browse help topics to create a ticket</h1>
          <input
            type="text"
            placeholder="Search for an answer or browse help topics to create a ticket"
            className="form-control mt-4 p-3"
          />
          <a href="">Track segment activation</a>
          <a href="">Intraday margins</a><br></br>
          <a href="">Kite user manual</a>
          <a href="">Track account opening</a>
        </div>
        <div className="col-6 p-5 mt-5 mb-5">
          <h1>featured</h1>
          <ol style={{ lineHeight: "2.5" }}>
            <li>
              <a href="">Current Takeovers and Delisting – September 2025</a>
            </li>
            <li>
              <a href="">Surveillance measure on scrips - September 2025</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Hero;
