import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Spinner from "react-bootstrap/Spinner";
import Formulario from "../FormComponents/Formulario"
import "bootstrap/dist/css/bootstrap.min.css";
import firebase from "../Service/firebase";

function Registro() {
  const [form, setForm] = useState({
    name: "",
    apellido: "",
    email: "",
    contraseña: "",
  });
  const [spinner, setSpinner] = useState(false);
  const [error, setError] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSpinner(true);
    setError(false);

    const { nombre, apellido, email, contraseña } = form;

    firebase.auth
      .createUserWithEmailAndPassword(email, contraseña)
      .then(({ user }) => {
        console.log("Usuario creado", user.uid);
        firebase.db
          .collection("usuarios")
          .add({
            nombre,
            apellido,
            email,
            userId: user.uid,
          })
          .then((data) => {
            setSpinner(false);
            console.log(data);
          })
          .catch(({ message }) => {
            console.log("Error", message);
            setError(message);
            setSpinner(false);
          });
      })
      .catch(({ message }) => {
        console.log("Error", message);
        setError(message);

        setSpinner(false);
      });
  };
  const handleChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <div className="registro">
      {" "}
      <h2>Register</h2>
      <div className="registro-component">
        <Form onSubmit={handleSubmit}>
        <Formulario type="text"
              id="inputPassword5"
              placeholder="Ingrese su Nombre"
              name="nombre"
              value={form.nombre}
              onChange={handleChange}/>

          <>
          <Formulario type="text"
              id="inputPassword5"
              placeholder="Ingrese su Apellido"
              name="apellido"
              value={form.apellido}
              onChange={handleChange}/>
          </>
          <>
          <Formulario type="email"
              id="inputPassword5"
              placeholder="Ingrese su Email"
              name="email"
              value={form.email}
              onChange={handleChange}/>

              <Form.Text id="passwordHelpBlock" muted>
                You must register with your email
              </Form.Text>
            
          </>
          <>
          <Formulario type="password"
              id="inputPassword5"
              placeholder="Ingrese su contraseña"
              name="contraseña"
              value={form.contraseña}
              onChange={handleChange}/>

              <Form.Text id="passwordHelpBlock" muted>
                Your password must be 8-20 characters long, contain letters and
                numbers, and must not contain spaces, special characters, or
                emoji.
              </Form.Text>
          </>
          {error && <div>{error}</div>}
          <div className="registro-button">
            <Button variant="info" type="submit">
              {spinner ? (
                <Spinner animation="border" variant="light" size="sm" />
              ) : (
                "Register"
              )}
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Registro;
