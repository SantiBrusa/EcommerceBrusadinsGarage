import imgCarrito from "../../assets/img/carrito.png";
import "./cartwidget.css";

const CartWidget = () => {
  return (
    <div className="iconoCarrito">
      <img src={imgCarrito} alt="" />
      <p>2</p>
    </div>
  );
};

export default CartWidget;
