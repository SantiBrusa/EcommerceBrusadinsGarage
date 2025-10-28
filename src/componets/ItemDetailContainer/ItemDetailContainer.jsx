import getProducts from "../../data/product.js";
import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail.jsx";
import { useParams } from "react-router-dom";
import LoadingWidget from "../LoadingWidget/LoadingWidget.jsx";
import "./ItemDetailContainer.css";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);

    getProducts()
      .then((data) => {
        const dataProduct = data.find((product) => product.id === parseInt(id));
        setProduct(dataProduct);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="containerItem">
      {loading ? (
        <div>
          <LoadingWidget />
        </div>
      ) : (
        <ItemDetail product={product} />
      )}
    </div>
  );
};

export default ItemDetailContainer;
