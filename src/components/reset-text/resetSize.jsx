import React from 'react'

import { useState } from 'react'

function ResetSize() {
  const [textSize, setTextSize] = useState("16");

  function increase() {
    let x = parseInt(textSize) + 2;
    if (x < 30) {
      // console.log(x);
      setTextSize(x);
    }
  }
  function decrease() {
    let x = parseInt(textSize) - 2;
    if (x>10) {
      // console.log(x);
      setTextSize(x);
    }
  }

  function initial() {
    let x = 16;
    setTextSize(x);
  }
  return (
    <>
      <div className="text-display" style={{ fontSize: `${textSize}px`, fontFamily: "sans-serif", margin: "20px" }}>This is the text to display on Screen.</div>

      <button onClick={increase}>Increase Size</button>
      <button onClick={decrease}>Decrease Size</button>
      <button onClick={initial}>Reset Size</button>

    </>
  )
}

export default ResetSize