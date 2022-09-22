import React, { useContext } from "react";
import { MyContext } from "../Context";

const Stage2 = () => {
  const context = useContext(MyContext);

  return (
    <>
      <div className="result_wrapper">
        <h1>Looser</h1>
        <h2>{context.state.result}</h2>
      </div>
      <div className="action_button" onClick={() => context.resetGame()}>
        Start Over
      </div>
      <div
        className="action_button btn_2"
        onClick={() => context.getNewLoser()}
      >
        get new
      </div>
    </>
  );
};

export default Stage2;
