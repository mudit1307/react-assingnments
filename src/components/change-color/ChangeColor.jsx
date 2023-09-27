import React from 'react'
import { useState } from 'react'

function ChangeColor() {
    const [color,setColor] = useState("red");

    function colorChange()
    {
        let newColor;
        if (color === "red")
        {
            newColor="blue";
        }
        else{
            newColor="red";
        }
        // let newColor= (color) == "red"? "blue":"red";
        setColor(newColor);
    }
  return (
    <>
    <div className="box" style={{backgroundColor: `${color}`, height: `200px`, width:"200px" , borderRadius: "10px" , padding:"20px", fontFamily: "sans-serif"}}>This is the Statement</div>
    <button onClick={colorChange}>Change Color</button>
    </>
  )
}

export default ChangeColor