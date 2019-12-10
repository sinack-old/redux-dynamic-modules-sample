import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <nav>
      <Link to="/">Counter</Link>
      <Link to="/messages">MessagesList</Link>
    </nav>
  );
};

export default Menu;
