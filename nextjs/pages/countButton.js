import { useEffect, useState } from "react";

const countButton = (props) => {
  const [countValue, setCountValue] = useState(0);

  const handleClick = () => {
    setCountValue(countValue = countValue + props.incrementBy)
  }

  useEffect(() => {
    console.log("UseEffect func called")
  }, [])

  return (
    <div>
      <button onClick={handleClick}>+{props.incrementBy}</button>
      <div>{countValue}</div>
      <button><a href="/">Home</a></button>
    </div>
  );
};

export default countButton;
