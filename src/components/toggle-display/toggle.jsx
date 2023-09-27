import React from 'react'
import {useState} from 'react'

function Toggle() {
    const [tog,setTog] = useState("Display None");
    const [dis,setDis] =useState("block");

    // let count=0;
    // function setCount(temp)
    // {
    //   count+=temp;
    // }

    function flip ()
    {
      // let newTog = ( tog === "Display None") ? "Display Block":"Display None";
      // setTog(newTog);
      if(tog == "Display None")
      {
        setTog("Display Block");
        setDis("none");
      }
      else 
      {
        setTog("Display None");
        setDis("block");
      }
    }


  return (
    <>
    <button onClick={flip}>{tog}</button>
    <p style={{margin: "20px", display: `${dis}`}}>This is the statement</p>
    </>
  )
}

export default Toggle
