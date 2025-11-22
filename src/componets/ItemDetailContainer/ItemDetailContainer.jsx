import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail.jsx";
import { useParams } from "react-router-dom";
import LoadingWidget from "../LoadingWidget/LoadingWidget.jsx";
import "./ItemDetailContainer.css";
import { doc, getDoc } from "firebase/firestore";
import db from "../../db/db.js";
import Error404 from "../Error/Error404.jsx";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const getProducts = async () => {
    try {
      const productsRef = doc(db, "products", id);
      const dataDb = await getDoc(productsRef);

      if (!dataDb.exists()) {
        setProduct(null);
      } else {
        const data = { id: dataDb.id, ...dataDb.data() };
        setProduct(data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="containerItem">
      {loading ? (
        <div>
          <LoadingWidget />
        </div>
      ) : !product ? (
        <Error404 />
      ) : (
        <ItemDetail product={product} />
      )}
    </div>
  );
};

export default ItemDetailContainer;
