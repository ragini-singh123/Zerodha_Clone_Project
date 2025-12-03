import React from "react";
import { useState } from "react";




const Team = () => {
  const [showBio1, setShowBio1] = useState(false);
  return (
    <div className="container ">
      <div className="row  ">
        <h1 className="fs-2 text-center">People</h1>
      </div>

      <div className="row p-5 text-muted ">
        <div
          className="col-6 p-5 text-center"
          style={{ lineHeight: "1.8", fontSize: "1.2em" }}
        >
          <img
            src="media\images\nithinKamath.jpg"
            style={{ borderRadius: "100%", width: "50%" }}
            alt="Nithin Kamath"
          />
          <h5 className="mt-4">Nithin Kamath</h5>
          <h6 className="text-muted">Founder & CEO</h6>
        </div>

        <div
          className="col-6 mt-5 "
          style={{ lineHeight: "1.5", fontSize: "1.1em" }}
        >
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>

          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>

          <p>Playing basketball is his zen.</p>

          <p>
            Connect on{" "}
            <a href="#" style={{ textDecoration: "none" }}>
              Homepage
            </a>{" "}
            /{" "}
            <a href="#" style={{ textDecoration: "none" }}>
              TradingQnA
            </a>{" "}
            /{" "}
            <a href="#" style={{ textDecoration: "none" }}>
              Twitter
            </a>
          </p>
        </div>
      </div>
      <div className="row p-5 text-center">
        <div className="col-4 mt-5  ">
          <img
            src="media\images\nithinKamath.jpg"
            style={{ borderRadius: "100%", width: "50%" }}
            alt="Nithin Kamath"
          />
          <h5 className="mt-4">Nithin Kamath</h5>
          <h6 className="text-muted">Founder & CEO</h6>

          <p
            onClick={() => setShowBio1(!showBio1)}
            style={{ cursor: "pointer" }}
          >
            Bio {showBio1 ? "˄" : "˅"}
          </p>

          {showBio1 && (
            <p>
              Nikhil is an astute and experienced investor, and he heads
              financial planning at Zerodha. An avid reader, he always
              appreciates a good game of chess.
            </p>
          )}
        </div>

        <div className="col-4 mt-5">
          <img
            src="media\images\nithinKamath.jpg"
            style={{ borderRadius: "100%", width: "50%" }}
            alt="Nithin Kamath"
          />
          <h5 className="mt-4">Nithin Kamath</h5>
          <h6 className="text-muted">Founder & CEO</h6>
        </div>

        <div className="col-4 mt-5">
          <img
            src="media\images\nithinKamath.jpg"
            style={{ borderRadius: "100%", width: "50%" }}
            alt="Nithin Kamath"
          />
          <h5 className="mt-4">Nithin Kamath</h5>
          <h6 className="text-muted">Founder & CEO</h6>
        </div>
      </div>
    </div>
  );
};

export default Team;
