import NavBar from "./componets/NavBar/NavBar";
import ItemListContainer from "./componets/ItemListContainer/ItemListContainer";
import "./App.css";

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting={"Bienvenido a brusadinsgarage"} />
      <h1>Hola Mundo</h1>
    </div>
  );
}

export default App;
