import React from "react";

const Universe = () => {
  return (
    <div className="container">
      <div className="row mt-3 mb-3 p-5">
        <div className="text-center mb-5">
          <h1>The Zerodha Universe</h1>
          <p>
            Extend your trading and investment experience even further with our
            partner platforms
          </p>
        </div>

        <div className="col-4 p-3 ">
          <img
            src="media\images\zerodhaFundhouse.png"
            style={{ width: "12rem", height: "4rem" }}
          />
          <p className="text-small  text-muted mt-3">
            Our asset management venture
            <br />
            that is creating simple and transparent index
            <br />
            funds to help you save for your goals.
          </p>
        </div>

        <div className="col-4 p-3">
          <img
            src="media\images\sensibullLogo.svg"
            style={{ width: "12rem", height: "4rem" }}
          />
          <p className="text-small  text-muted mt-3">
            Options trading platform that lets you
            <br />
            create strategies, analyze positions, and examine
            <br />
            data points like open interest, FII/DII, and more.
          </p>
        </div>

        <div className="col-4 p-3">
          <img
            src="media\images\goldenpiLogo.png"
            style={{ width: "12rem", height: "4rem"  }}
          />
          <p className="text-small  text-muted mt-3">
            Investment research platform
            <br />
            that offers detailed insights on stocks,
            <br />
            sectors, supply chains, and more.
          </p>
        </div>

        <div className="col-4 p-3 mt-3 mb-5">
          <img
            src="media\images\streakLogo.png"
            style={{ width: "12rem", height: "4rem" }}
          />
          <p className="text-small  text-muted mt-3">
            Our asset management venture
            <br />
            that is creating simple and transparent index
            <br />
            funds to help you save for your goals.
          </p>
        </div>

        <div className="col-4 p-3 mt-3 mb-5">
          <img
            src="media\images\smallcaseLogo.png"
            style={{ width: "12rem", height: "4rem"  }}
          />
          <p className="text-small  text-muted mt-3">
            Options trading platform that lets you
            <br />
            create strategies, analyze positions, and examine
            <br />
            data points like open interest, FII/DII, and more.
          </p>
        </div>

        <div className="col-4 p-3 mt-3 mb-5">
          <img
            src="media\images\dittoLogo.png"
            style={{ width: "12rem", height: "4rem" }}
          />
          <p className="text-small  text-muted mt-3">
            Investment research platform
            <br />
            that offers detailed insights on stocks,
            <br />
            sectors, supply chains, and more.
          </p>
          </div>
        <button className='p-2 btn btn-primary fs-5 mb-5' style={{width:"25%", margin: "0 auto"}}>Signup Now</button>
        </div>
    </div>
  );
};

export default Universe;
