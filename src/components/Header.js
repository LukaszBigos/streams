import React from "react";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <Link to="/" className="nav-item nav-link" href="#">
        Streams
      </Link>
      <Link to="/" exact="true" className="nav-item nav-link" href="#">
        All streams
      </Link>
    </nav>
  );
};

export default Header;
