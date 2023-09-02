import React from "react";

const Hero = () => {
  return (
    <main className="container hero">
      <div className="container-info">
        <h1> YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="btn-grp">
          <button>Shop Now</button>
          <button className="secondary">Category</button>
        </div>
        <div className="shopping">
          <p>Also Available on</p>
          <div className="shopping-web">
            <img src="/images/flipkart.png" alt="amazon" />
            <img src="/images/amazon.png" alt="amazon" />
          </div>
        </div>
      </div>
      <div className="container-banner">
        <img src="/images/shoe_image.png" alt="shoe_image" />
      </div>
    </main>
  );
};

export default Hero;
