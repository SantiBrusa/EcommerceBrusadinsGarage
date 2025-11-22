import NavBar from "./componets/NavBar/NavBar";
import ItemListContainer from "./componets/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./componets/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Error404 from "./componets/Error/Error404";
import { CartProvider } from "./context/CartContext";
import Cart from "./componets/Cart/Cart";
import Checkout from "./componets/Checkout/Checkout";

function App() {
  return (
    <div>
      <BrowserRouter>
        <CartProvider>
          <NavBar />

          <Routes>
            <Route
              path="/"
              element={
                <ItemListContainer greeting={"Bienvenido a BrusadinsGarage"} />
              }
            />
            <Route path="/category/:cat" element={<ItemListContainer />} />
            <Route path="/detail/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
