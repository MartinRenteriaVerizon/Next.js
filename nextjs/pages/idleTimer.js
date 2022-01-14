import { useState, useEffect } from "react";

const idleTimer = () => {
    const [idleTime, timer] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
          timer(idleTime => idleTime + 1)
        }, 1000);
      }, []);

      if(idleTime === 10) {
        timer(idleTime = 0);
        alert("Are you still there?")
    }; 
    
// clears the timer and sets the idletimer to zero
const clearTimer = () => {
    timer(idleTime = 0)
}

    return (
    <div onMouseMove={clearTimer}>
    <button><a href='/'>Home</a></button>
    <h1>A simple idle timer</h1>
    <p className="timertext">
        You are idle for
        <span> {idleTime} </span>  
        </p>
  
    </div>
    )
}

export default idleTimer;