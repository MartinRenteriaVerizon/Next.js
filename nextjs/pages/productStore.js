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

import Loading from '../components/loading'
import {useState, useEffect} from 'react'
const productStore = () => {
const [loading, setLoading] = useState(false)
const [productState, setProduct] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then((response) => response.json())
        .then((productArray) => {
            const newProductState = productArray.map((product) => {
                return <li>{product.title}</li>
            })
            setLoading(true)
            setProduct(newProductState)
        })
    }, [])
    return (
        
        <div>
        <button><a href='/'>Home</a></button>
        <h1>The Product Store API</h1>
            <div>{loading ? productState: <Loading />}</div>
        </div>
    )
}

export default productStore;