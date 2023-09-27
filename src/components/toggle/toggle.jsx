import React from 'react'
import {useState} from 'react'

function Toggle() {
    // const [toggle,setToggle] = useState();
    const [count,setCount] =useState(0)

    // let count=0;
    // function setCount(temp)
    // {
    //   count+=temp;
    // }
    function increment()
    {
      setCount(count + 1);
    }

  return (
    <>
    <button onClick={increment}>Increment</button>
    <p>{count}</p>
    </>
  )
}

export default Toggle
