import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./CartItem.css";

const CartItem = ({ productCart }) => {
  const { deleteProductByID } = useContext(CartContext);

  return (
    <div className="item">
      <div className="container-img">
        <img src={productCart.image} alt="" className="item-img" />
      </div>
      <h2>{productCart.name}</h2>
      <h3>{productCart.description}</h3>
      <h4>Precio unitario: ${productCart.price}</h4>
      <h4>Cantidad: {productCart.quantity}</h4>
      <h4>Precio Parcial: ${productCart.price * productCart.quantity}</h4>
      <button
        onClick={() => deleteProductByID(productCart.id)}
        className="item-buttom"
      >
        Eliminar
      </button>
    </div>
  );
};

export default CartItem;
