import { LuTriangleAlert } from "react-icons/lu";
import { Link } from "react-router-dom";
import "./Error404.css";

const Error404 = () => {
  return (
    <div className="Error">
      <LuTriangleAlert color="red" size={150} />
      <h1>Error 404</h1>
      <Link to="/" className="back">
        Volver al Catalogo
      </Link>
    </div>
  );
};

export default Error404;
