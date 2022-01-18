import { useState, useEffect } from "react";

const idlesetTimer = () => {
    const [idleTime, setTimer] = useState(0)

    useEffect(() => {
            const interval = setInterval(() => {
                setTimer(idleTime => idleTime + 1)
              }, 1000);
      }, []);

      useEffect(() => {
        if(idleTime === 10) {
            alert("Are you still there?")
            setTimer(0)
        } 
      }, [idleTime])

// clears the setTimer and sets the idlesetTimer to zero
const clearsetTimer = () => {
    setTimer(idleTime = 0)
}

    return (
    <div onMouseMove={clearsetTimer}>
    <button><a href='/'>Home</a></button>
    <h1>A simple idle setTimer</h1>
    <p className="setTimertext">
        You are idle for
        <span> {idleTime} </span>  
        </p>
  
    </div>
    )
}

export default idlesetTimer;