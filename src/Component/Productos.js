import React from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import firebase from "../Service/firebase";
function Productos(props) {
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    /*fetch("https://jsonfy.com/items/" + props.match.params.id)
      .then((res) => res.json())

      .then((data) => {
        setProductos(data[0]);
      });*/
    firebase.db
      .doc("productos/" + props.match.params.id)
      .get()
      .then((doc) => {
        setProductos(doc.data());
      });
  }, []);

  console.log(productos);
  return (
    <div className="productos">
      <h2>Detalles del producto</h2>
      <img className="photo" src={productos.photo_url} />
      <div>
        <h3>{productos.name}</h3>
      </div>
      <div>
        <strong>Descripción del producto:</strong> {productos.description}
      </div>
      <div>Poseemos {productos.stock} articulos de este modelo</div>
      <div>${productos.price}</div>
      <Button variant="info">Comprar</Button>
    </div>
  );
}

export default Productos;
