import getProducts from "../../data/product.js";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList.jsx";
import "./itemlistcontainer.css";
import { useParams } from "react-router-dom";
import LoadingWidget from "../LoadingWidget/LoadingWidget.jsx";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { cat } = useParams();

  useEffect(() => {
    setLoading(true);

    getProducts()
      .then((data) => {
        if (cat) {
          const productsFilter = data.filter(
            (product) => product.category === cat
          );
          setProducts(productsFilter);
        } else {
          setProducts(data);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, [cat]);

  return (
    <div className="container">
      <h2>{greeting}</h2>
      {loading ? (
        <div>
          <LoadingWidget />
        </div>
      ) : (
        <ItemList products={products} />
      )}
    </div>
  );
};

export default ItemListContainer;
