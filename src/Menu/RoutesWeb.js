import Home from "../Home";
import Registro from "../Component/Registro";
import Login from "../Component/Login";
import { Route } from "react-router-dom";
import Productos from "../Component/Productos";

const RoutesWeb = () => {
  return (
    <div>
      <Route path="/home" exact component={Home} />
      <Route path="/registro" exact component={Registro} />
      <Route path="/login" exact component={Login} />
      <Route path="/productos/:id" exact component={Productos} />
    </div>
  );
};
export default RoutesWeb;
