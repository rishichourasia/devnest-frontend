import { useState } from "react";

function useCounter ( initialValue = 0 , value){
const[count, setCount]= useState(initialValue);

const increment = () => {
  setCount(count + value);
}

const decrement = () => {
  setCount(count - value);
}

const setDefault = () => {
  setCount(initialValue);
}
return [count , increment , decrement ,setDefault]

}

export default useCounter