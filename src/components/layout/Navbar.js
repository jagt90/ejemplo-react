import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <div>Navbar</div>
      <ul className="nav">
        <li>
          <Link to="/"> Home</Link>
        </li>
        <li>
          <Link to="/tesoreria/solicitud">gastos</Link>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
