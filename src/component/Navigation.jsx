import React from "react";

export default function Navigation() {
  return (
    <nav>
      <div className="logo">
        <img src="/images/brand_logo.png" alt="brandlogo" />
      </div>

      <ul>
        <li href="#">Menu</li>
        <li href="#">Location</li>
        <li href="#">About</li>
        <li href="#">Contact</li>
      </ul>

      <button>Login</button>
    </nav>
  );
}
