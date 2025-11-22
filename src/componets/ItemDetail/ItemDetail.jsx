import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount.jsx";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext.jsx";
import { Link } from "react-router-dom";

const ItemDetail = ({ product }) => {
  const { addProduct } = useContext(CartContext);
  const [viewItemCount, setViewItemCount] = useState(true);

  const addToCart = (count) => {
    setViewItemCount(false);
    const newProduct = { ...product, quantity: count };
    addProduct(newProduct);
  };

  return (
    <div className="Container">
      <div className="ImageItem">
        <img src={product.image} alt="" />
      </div>
      <div>
        <div className="InformationItem">
          <h2>{product.name}</h2>
          <h3>{product.description}</h3>
          <h3>Precio: ${product.price}</h3>
        </div>
        <div className="viewCart">
          {viewItemCount ? (
            <ItemCount stock={product.stock} addToCart={addToCart} />
          ) : (
            <Link to="/cart" className="linkViewCart">
              Ver Carrito
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
