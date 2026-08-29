import { RiResetRightLine } from "@remixicon/react";
import { useState } from "react";

const Counter = () => {
  const [number, setNumber] = useState(0);

  function minus() {
    if (number > 0) setNumber(number - 1);
  }

  return (
    <div className="background">
      <div className="box">
        <div className="top">
          <button onClick={()=>{setNumber(0)}}>
            <RiResetRightLine />
          </button>
        </div>
        <div className="center">
          <div className="projectNum">{number}</div>
        </div>
        <div className="bottom">
          <div className="control">
            <button onClick={minus}>-</button>
            <button onClick={()=>{setNumber(number+1)}}>+</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
