import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Brittany Gonzales</div>
      <div className="navbar-links">
        <NavLink to="/" end>Inicio</NavLink>
        <NavLink to="/ejercicio1">Ejercicio 1</NavLink>
        <NavLink to="/ejercicio2">Ejercicio 2</NavLink>
        <NavLink to="/ejercicio3">Ejercicio 3</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;