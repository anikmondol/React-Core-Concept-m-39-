import { useState } from "react"

export default function Counter(){

    const [count, setCount] = useState(0);

    const handleAdd = () =>{
        setCount(count + 1)
    }


    const handleMines = () =>{
        setCount(count - 1)
    }

    const style = {
        border: "2px solid blue",
        padding: "5px",
        margin: "10px",
        borderRadius: "10px"
    }

    return (
        <div style={style}>
            <h2>Counter: {count}</h2>
            <button onClick={handleAdd}>+</button>
            <button onClick={handleMines}>-</button>
        </div>
    )
}