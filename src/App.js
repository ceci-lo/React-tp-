import { useState } from "react";
import "./CSS/Style.css";
import Menu from "./Menu/index";
import RoutesWeb from "./Menu/RoutesWeb";
import { BrowserRouter } from "react-router-dom";
function App() {
  const [opciones, setOpciones] = useState([
    {
      path: "/home",
      label: "Home",
    },
    { path: "/registro", label: "Registro" },
    {
      path: "/login",
      label: "Login",
    },
  ]);

  return (
    <div>
      <BrowserRouter>
        <Menu data={opciones} />

        <RoutesWeb />
      </BrowserRouter>
    </div>
  );
}

export default App;
