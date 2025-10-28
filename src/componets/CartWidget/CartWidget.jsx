// import imgCarrito from "../../assets/img/carrito.png";
import "./cartwidget.css";
import { BsCart } from "react-icons/bs";

const CartWidget = () => {
  return (
    <div className="iconoCarrito">
      {/* <img src={imgCarrito} alt="" /> */}
      <BsCart size={40} />
      <p>2</p>
    </div>
  );
};

export default CartWidget;
