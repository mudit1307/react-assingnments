import React, { useState } from 'react'

function ToDo() {
    const [value,setValue] =useState("");
    const [arr,setArr] = useState([]);
    function foo()
    {
        console.log(value);
        setArr([...arr,value]);
    }

  return (
<>
<div>
    <form onSubmit={foo}>
    <input type="text" placeholder='Enter your text here' value={value} onChange={(e) => setValue(e.target.value)}/>
    <button type = 'submit'>Add to List</button>
    </form>
</div>
<div>
    <ul>
        {
            // arr.map((temp,indx)=>
            // {
            //     <li key={indx}>{temp}</li>
            // })
        }
    </ul>
</div>
</>
  )
}

export default ToDo