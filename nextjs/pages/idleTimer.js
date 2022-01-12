// Starting idleTime
let idleTime = 0;
// increment the idle time counter every second
let idleInterval = setInterval(timerIncrement, 1000); // 1 second

function timerIncrement() {
    idleTime = idleTime + 1;

    // console.log(idleTime)
}

function clearTimer({idleTime, idleInterval}) {
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