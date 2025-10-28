import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <div className="Item">
      <div className="Container-img">
        <img className="Item-img" src={product.image} alt="" />
      </div>
      <p>{product.name}</p>
      <p>Precio: {product.price}</p>
      <Link to={"/detail/" + product.id} className="buttonInf">
        Más Información
      </Link>
    </div>
  );
};

export default Item;
