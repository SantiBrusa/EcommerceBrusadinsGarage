import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./cartwidget.css";
import { BsCart } from "react-icons/bs";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);
  const quantity = totalQuantity();
  return (
    <Link to="/cart" className="iconoCarrito">
      <BsCart size={40} />
      <p>{quantity !== 0 && quantity}</p>
    </Link>
  );
};

export default CartWidget;
