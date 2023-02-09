import React from "react";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <div>
      <h1>compu e-commerce</h1>
      <ul>
        <li>producto1</li>
        <li>producto2</li>
      </ul>
      <CartWidget/>
    </div>
  );
};

export default NavBar;
