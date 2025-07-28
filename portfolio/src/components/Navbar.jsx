import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav>
        <div>
          <a href="/">OJIKUTU</a>
        </div>
        <ul>
          <li>
            <a href="/about">About</a>
            <a href="/projects">Projects</a>
            <a href="ref">reference</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
