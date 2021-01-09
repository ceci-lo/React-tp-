import React from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";

const Menu = (props) => {
  return (
    <div>
      <Nav variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">
            {props.data.map((props) => (
              <Link to={props.path}>{props.label} </Link>
            ))}
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default Menu;
