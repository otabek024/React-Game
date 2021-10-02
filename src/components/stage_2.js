import React, { useContext } from "react";

import { MyContext } from "../context";

const Stage2 = () => {
  const context = useContext(MyContext);

  return (
    <>
      <div className="result_wrapper">
        <div>
          <h3>The looser is: <span className="looser">{context.state.result}</span></h3>
        </div>
      </div>
      <div className="action_button btn1" onClick={ () => context.resetGame()}>Start Over</div>
      <div className="action_button btn2" onClick={ () => context.getNewLooser()}>Get New Looser</div>
    </>
  );
};

export default Stage2;
