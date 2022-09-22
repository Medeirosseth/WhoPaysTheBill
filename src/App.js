import React, { useContext } from "react";
import { MyContext } from "./Context";
import Stage1 from "./Components/stage1";
import Stage2 from "./Components/stage2";
import "./style/app.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const context = useContext(MyContext);
  console.log(context);
  return (
    <>
      <div className="wrapper">
        <div className="centerWrapper">
          <h1>Who Pays The Bill?</h1>
          {context.state.stage === 1 ? <Stage1 /> : <Stage2 />}
        </div>
      </div>
    </>
  );
}

export default App;
