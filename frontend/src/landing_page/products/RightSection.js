import React from "react";

const RightSection = ({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) => {
  return (
    <div className="container">
      <div className="row mt-3 mb-3 p-5">
        <div className="col-6 ">
          <h2>{productName}</h2>
          <p>{productDescription}</p>
          <div>
            <a href={learnMore}>
              Learn More{" "}
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>

        <div className="col-6  mb-5">
          <img src={imageURL} ></img>
        </div>
      </div>
    </div>
  );
};

export default RightSection;
