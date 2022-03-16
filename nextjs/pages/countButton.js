import { useEffect, useState } from "react";

const countButton = (props) => {
  const [countValue, setCountValue] = useState(0);

  const increase = () => {
    setCountValue((countValue = countValue + props.incrementBy));
  };

  const decrease = () => {
    setCountValue((countValue = countValue - props.incrementBy));
  }

  const resetButton = () => {
    setCountValue(0);
  };

  return (
    <div>
      <button onClick={increase}>+{props.incrementBy}</button>
      <div>{countValue}</div>
      <button onClick={decrease}>-{props.incrementBy}</button>
      <button variant="primary" onClick={resetButton}>
        Reset
      </button>
      <br />
      <br />
      <button>
        <a href="/">Home</a>
      </button>
    </div>
  );
};

export default countButton;
