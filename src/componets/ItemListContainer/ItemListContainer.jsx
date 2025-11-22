import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList.jsx";
import "./itemlistcontainer.css";
import { useParams } from "react-router-dom";
import LoadingWidget from "../LoadingWidget/LoadingWidget.jsx";
import { collection, getDocs, query, where } from "firebase/firestore";
import db from "../../db/db.js";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { cat } = useParams();
  const productsRef = collection(db, "products");

  const getProducts = async () => {
    try {
      const dataDb = await getDocs(productsRef);
      const data = dataDb.docs.map((productsDb) => {
        return { id: productsDb.id, ...productsDb.data() };
      });
      setProducts(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const getProductsByCategory = async () => {
    try {
      const q = query(productsRef, where("category", "==", cat));
      const dataDb = await getDocs(q);
      const data = dataDb.docs.map((productsDb) => {
        return { id: productsDb.id, ...productsDb.data() };
      });
      setProducts(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (cat) {
      getProductsByCategory();
    } else {
      getProducts();
    }
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
