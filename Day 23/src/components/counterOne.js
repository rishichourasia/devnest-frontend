import { React , useState } from "react"
import useCounter from "../useCounter"


function CounterOne (){

  const[count,increment,decrement,setDefault] = useCounter(0,1)

return (
  <>
<h2>Count {count}</h2>
<button onClick={increment}>Increment</button>
<button onClick={decrement}>decrement</button>
<button onClick={setDefault}>Set default</button>
</>
)
}

export default CounterOne

