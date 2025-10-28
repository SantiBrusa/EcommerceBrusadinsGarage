import "./ItemDetail.css";

const ItemDetail = ({ product }) => {
  return (
    <div className="Container">
      <div className="ImageItem">
        <img src={product.image} alt="" />
      </div>
      <div className="InformationItem">
        <h2>{product.name}</h2>
        <h3>{product.description}</h3>
        <h3>Precio: {product.price}</h3>
      </div>
    </div>
  );
};

export default ItemDetail;
