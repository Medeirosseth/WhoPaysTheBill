import React, { useState, useContext, useRef } from "react";
import { Button, Form, Alert } from "react-bootstrap";
import { MyContext } from "../Context";

const Stage1 = () => {
  const context = useContext(MyContext);
  const textInput = useRef();
  const [error, setError] = useState([false, ""]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = textInput.current.value;
    const validate = validateInput(value);

    if (validate) {
      setError([false, ""]);
      context.addPlayer(value);
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

  console.log(context);
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
        {context.state.players && context.state.players.length > 0 ? (
          <>
            <hr />
            <div>
              <ul className="list-group">
                {context.state.players.map((player, idx) => (
                  <li
                    key={idx}
                    className="list-group-item d-flex justify-content-between align-items-center list-group-item-action"
                  >
                    {player}
                    <span onClick={() => context.removePlayer(idx)}>X</span>
                  </li>
                ))}
              </ul>
              <div>
                <Button
                  className="action-button"
                  onClick={() => context.next()}
                >
                  Next
                </Button>
              </div>
            </div>
          </>
        ) : null}
      </Form>
    </>
  );
};

export default Stage1;
