import React, { useState, useMemo } from "react";
import {useHistory} from "react-router-dom"
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import firebase from "../Service/firebase";
function Login() {
  const [form, setForm] = useState({
    email: "",
    contraseña: "",
  });
  const [spinner, setSpinner] = useState(false);
  const history = useHistory();
  const esValido = useMemo(() => {
    return form.email.length > 0 && form.contraseña.length >= 6;
  }, [form.email, form.contraseña]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSpinner(true);
    let email = form.email;
    let contraseña = form.contraseña;
    firebase.auth
      .signInWithEmailAndPassword(email, contraseña)
      .then((data) => {
        console.log("Usuario logueado", data.user.uid)
        history.push("/home")
      })
      .catch((error) => {
        console.log("Error", error);
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
    <div className="login">
      <div>
        <h2>Login</h2>
      </div>
      <Form onSubmit={handleSubmit}>
        <>
          <Form.Label htmlFor="inputPassword5" className="inputLogin">
            Email
          </Form.Label>
          <Form.Control
            type="email"
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
        </>

        <>
          <Form.Label htmlFor="inputPassword5" className="inputLogin">
            Password
          </Form.Label>
          <Form.Control
            className="inputLogin"
            type="password"
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
            name="contraseña"
            value={form.contraseña}
            onChange={handleChange}
          />
          <Form.Text id="passwordHelpBlock" muted>
            Your password must be 6 characters long.
          </Form.Text>
        </>

        <div className="registro-button">
          <Button variant="info" type="submit" disabled={!esValido}>
            Login
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default Login;
