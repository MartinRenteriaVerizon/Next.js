// Starting idleTime
let idleTime = 0;
// increment the idle time counter every second
let idleInterval = setInterval(timerIncrement, 1000); // 1 second
function timerIncrement(e) {
    idleTime = idleTime + 1;

    if (idleTime === 20) {
        alert('Still have questions? Book a time to speak to our team and find the right solution."')
    }
    // console.log(idleTime)
}

// clears the timer and sets the idletimer to zero
function clearTimer() {
    idleTime = 0;
}

const idleTimer = () => {
    return (
    <div onMouseMove={clearTimer}>
    <button><a href='/'>Home</a></button>
    <h1>A simple idle timer</h1>
    <p className="timertext">
        You are idle for
        <span> </span>  
        </p>
  
    </div>
    )
}

export default idleTimer;