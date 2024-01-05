import React from "react";

export default function HeroSection() {
  return (
    <main className="hero container">
      <div className="heroContent">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>

        <div className="herobutton">
          <button>Shop Now</button>
          <button className="second-btn">Category</button>
        </div>
        <div className="shopping">
          <p>Available on</p>
          <div className="brand-icons">
            <img src="/images/amazon.png" alt="amazon-logo" />
            <img src="/images/flipkart.png" alt="amazon-logo" />
          </div>
        </div>
      </div>
      <div className="heroImage">
        <img src="/images/shoe_image.png" alt="shoe-logo" />
      </div>
    </main>
  );
}
