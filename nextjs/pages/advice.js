// Used props to display API data and is calling API upon every page reload

// export const getStaticProps = async () => {
    
//         const res = await fetch("https://api.adviceslip.com/advice")
//         const data = await res.json();
    
//         return {
//             props: { getAdvice: data }
//         }
// }

// const Advice = () => {
//     return (
//         <div>
//         <h1>The Advice API</h1>
//         <p>{getAdvice.slip.advice}</p>
//         </div>
//     )
// }


const handleClick = async () => {
    const res = await fetch("https://api.adviceslip.com/advice")
    const data = await res.json();

    console.log(data.slip.advice)
}

const Advice = () => {
    return (
        
        <div>
        <button><a href='/'>Home</a></button>
        <h1>The Advice API</h1>
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}

export default Advice;