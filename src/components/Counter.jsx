import { useState } from "react";
import { useEffect } from "react";

const Counter = () => {
  const [count,setCount] = useState(0);
  const [count2,setCount2] = useState(0);
  
  useEffect(()=>{
    if(count===5){
      console.log("Counter 1 has reached limit")
}},[count])

useEffect(()=>{
  if(count2===7){
    console.log("Counter 2 has reached limit")
  }
},[count2])


  const increment = ()=>{
    setCount(count+1)
    // setCount(count+1)          this will increment only once even given three times as 1,2,3 etc.
    // setCount(count+1)
    // setCount((prev)=>prev+1) //}
    // setCount((prev)=>prev+1) //}
    // setCount((prev)=>prev+1)  //}  this will increment as 4, 8, 12
    console.log(count)
  }
  const decrement = () =>{
    setCount(count-1)
    console.log(count)
  }
   
  const clear = () =>{
    setCount(0)
    console.log(count)
  }


  const increment1 = ()=>{
    setCount2(count2 + 1)
    console.log(count2)
 }
const decrement1 = () =>{
  setCount2(count2-1)
  console.log(count2)
}

const clear1 = () =>{
  setCount2(0)
  console.log(count2)
}

  


  return (
    <>
    <div>Counter 1</div>
    <div>{count}</div>
    {/* <button onClick={()=>setCount(count+1)}>+</button> */}  
    {/* <button onClick={()=>setCount(count-1)}>-</button> */}
    <button onClick={increment}>+</button>
    <button onClick={decrement}>-</button>
    {
      count !==0 &&<button onClick={clear}>Clear</button>
    }
    <hr/>




   <div>Counter 2</div>
    <div>{count2}</div>
    <button onClick={increment1}>+</button>
    <button onClick={decrement1}>-</button>
    {
      count2 !==0 &&<button onClick={clear1}>Clear</button>
    }
    </>
    
  )
}

export default Counter