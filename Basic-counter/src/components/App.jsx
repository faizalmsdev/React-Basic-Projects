import React,{useState} from "react";

function App (){

  const[count,setCount]=useState(0)


  function decrease(){
    console.log("decreased");
    setCount(count - 1);
  }

  function increase(){
    console.log("increased");
    setCount(count + 1);
  }


  return(
    <div>
      <h2>Simple Counter</h2>
      <h1>{count}</h1>
      <button onClick={decrease}>-</button>
      <button onClick={increase}>+</button>
      
    </div>
  )
}
export default App;