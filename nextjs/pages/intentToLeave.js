import { useEffect, useState } from "react";

const backAlert = () => {
  const [pressed, setPressed] = useState(false);

    useEffect(() => {
        document.addEventListener("visibilitychange", function() {
            console.log('hello')
            console.log(document.visibilityState)
              if (document.visibilityState === 'hidden') {
               alert('Are you sure you want to go')
            }
          });
    }, []);
console.log('hi')
  return (
    <div>
      <h1>Back Alert</h1>
      <p>{pressed.toString()}</p>
      <button><a href="/">Home</a></button>
    </div>
  );
};

export default backAlert;
