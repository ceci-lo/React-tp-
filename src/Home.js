import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import firebase from "../src/Service/firebase";
const Home = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    /*fetch("https://jsonfy.com/items")
      .then((res) => res.json())

      */
    firebase.db
      .collection("productos")
      .get()
      .then((querySnapshot) => {
        setProductos(querySnapshot.docs);
        setLoading(false);
      });
  }, []);
  console.log(productos);
  return (
    <div className="home">
      <h2>Nuestros Productos</h2>
      {loading && <header>Loading... </header>}
      {!loading &&
        productos.length > 0 &&
        productos.map((productos) => (
          <div>
            <div>
              <strong>{productos.data().name}</strong>
            </div>
            <div>
              <img src={productos.data().photo_url} className="photo" />
            </div>
            <Link to={"/productos/" + productos.id}>
              <Button variant="info">Ver Detalles</Button>
            </Link>
          </div>
        ))}
    </div>
  );
};

export default Home;
