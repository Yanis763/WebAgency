import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => (
       <nav>
           <Link to="/">Go Home</Link>
           <Link to="/about">Go About</Link>
           <Link to="/works">Go Works</Link>
       </nav>
);
export default Navbar;