import { LuTriangleAlert } from "react-icons/lu";
import "./Error404.css";

const Error404 = () => {
  return (
    <div className="Error">
      <LuTriangleAlert color="red" size={150} />
      <h1>Error 404</h1>
    </div>
  );
};

export default Error404;
