import { useState } from "react"

const style = {
    margin: "10px",
    border: "2px solid yellow",
    borderRadius: "10px",
    padding: "5px"
}

export default function Team(){
    const [teamCount, setTeamCount] = useState(11);
    
    const handleAdd = () =>{
        setTeamCount(teamCount + 1)
    }

    const handleRemove = () =>{
        setTeamCount(teamCount - 1)
    }

    return(
        <div style={style}>
            <h3>Player: {teamCount}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleRemove}>Remove</button>
        </div>
    )
}