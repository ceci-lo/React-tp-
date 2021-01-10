import React from "react"
import { Form } from "react-bootstrap"


const Formulario = (props)=>{
    return(
        <Form.Group>
            <Form.Label >{props.Label}</Form.Label>
            <Form.Control
              type={props.type}
              id="inputPassword5"
              placeholder={props.placeholder}
              name={props.name}
              value={props.value}
              onChange={props.Change}
            />
          </Form.Group>

    )
}


export default Formulario;