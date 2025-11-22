import { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ stock, addToCart }) => {
  const [count, setCount] = useState(1);

  const handleClickRestar = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleClickSumar = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  return (
    <div className="container-count">
      <div className="count">
        <button onClick={handleClickRestar} className="menos">
          -
        </button>
        <p className="text-count">{count}</p>
        <button onClick={handleClickSumar} className="mas">
          +
        </button>
      </div>

      <button onClick={() => addToCart(count)} className="agregar">
        Agregar al Carrito
      </button>
    </div>
  );
};

export default ItemCount;
