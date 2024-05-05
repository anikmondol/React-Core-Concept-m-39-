
import './App.css'
import Counter from './Counter'
import Friends from './Friends'
import Team from './Team'
import Users from './Users'


function App() {
  
  function handleClick(){
    alert("button clicked")
  }

  const handleClick2 = () =>{
    alert("button clicked2")
  }

  const addToFive = (num) =>{
    alert(5 + num);
  }

  return (
    <>
     
      <h2>React Core Concept</h2>
      <Friends></Friends>
      <Users></Users>
      <Counter></Counter>
      <Team></Team>
      {/* <button onclick="handleClick()">Click Me</button> */}
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click2</button>
      <button onClick={() => {alert("This is a third")}}>Third</button>
      <button onClick={function handleClick4(){
        alert("alert by fourth")}}>Fourth</button>
        {/* vejailla */}
      <button onClick={() => addToFive(3)}>Add to Five</button>  
    </>
  )
}

export default App
