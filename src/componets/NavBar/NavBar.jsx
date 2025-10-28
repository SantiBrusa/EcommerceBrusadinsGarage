import "./navbar.css";
import logo from "../../assets/img/logo-removebg-preview.png";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="NavBar">
      <Link to="/">
        <img src={logo} alt="" />
      </Link>

      <h1>Brusadin's Garage</h1>
      <ul>
        <li>
          <Link to="/category/shampoo">Shampoo</Link>
        </li>
        <li>
          <Link to="/category/ceras">Ceras</Link>
        </li>
        <li>
          <Link to="/category/renovadores">Renovadores</Link>
        </li>
      </ul>

      <CartWidget />
    </nav>
  );
};

export default NavBar;
