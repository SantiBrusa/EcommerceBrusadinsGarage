import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem.jsx";
import "./Cart.css";

const Cart = () => {
  const { cart, deleteProductByID, totalPrice, deleteCart } =
    useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div className="body">
        <h2>¡El Carrito esta vacio!</h2>
        <Link to="/" className="link">
          Vuelve a nuestro catalogo para añadir productos!
        </Link>
      </div>
    );
  }

  return (
    <div className="body">
      <div className="list">
        {cart.map((productCart) => (
          <CartItem productCart={productCart} key={productCart.id} />
        ))}
      </div>
      <h2>Total: ${totalPrice()}</h2>

      <div className="options">
        <button onClick={deleteCart} className="buttom-clear">
          Vaciar Carrito
        </button>
        <Link to="/checkout" className="link">
          Continuar con mi Compra
        </Link>
      </div>
    </div>
  );
};

export default Cart;
