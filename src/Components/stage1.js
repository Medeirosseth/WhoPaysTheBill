import React, { useState, useContext, useRef } from "react";
import { Button, Form, Alert } from "react-bootstrap";

const Stage1 = () => {
  const textInput = useRef();
  const [error, setError] = useState([false, ""]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = textInput.current.value;
    const validate = validateInput(value);

    if (validate) {
      setError([false, ""]);
      textInput.current.value = "";
    }
  };

  const validateInput = (value) => {
    if (value === "") {
      setError([true, "Input cant be blank"]);
      return false;
    }
    if (value.length <= 2) {
      setError([true, "must be three characters "]);
      return false;
    }
    return true;
  };

  return (
    <>
      <Form onSubmit={handleSubmit} className="mt=4">
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Add Player Name"
            name="player"
            ref={textInput}
          />
        </Form.Group>
        {error[0] ? <Alert>{error[1]}</Alert> : null}
        <Button className="miami" var="primary" type="submit">
          Add
        </Button>
      </Form>
    </>
  );
};

export default Stage1;
