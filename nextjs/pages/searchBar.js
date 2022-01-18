import {useState} from 'react'

const searchBar = (props)=>{

const [searchValue, setSearchValue] = useState("")

const handleInputChange = (event) => {
    setSearchValue(event.target.value)
}

const clearInput = () => {
    setSearchValue("")
}

const filterProducts = props.products.filter((product) =>{
    return product.includes(searchValue)
})

    return (
        <div>
            <input type="text" value={searchValue} onChange={handleInputChange} />
            <button onClick={clearInput}>clear</button>
{filterProducts.map((product) => {
    return <li key={product}>{product}</li>
})}
    <button><a href="/">Home</a></button>
        </div>
    )
}

export default searchBar;