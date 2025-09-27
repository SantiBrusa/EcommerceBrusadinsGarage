import "./navbar.css";
import logo from "../../assets/img/logo-removebg-preview.png";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <nav className="NavBar">
      <img src={logo} alt="" />
      <h1>Brusadin's Garage</h1>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Servicios</a>
        </li>
        <li>
          <a href="#">Productos</a>
        </li>
      </ul>

      <CartWidget />
    </nav>
  );
};

export default NavBar;
