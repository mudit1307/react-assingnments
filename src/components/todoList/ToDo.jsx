import React, { useState } from 'react'

function ToDo() {

    const [value,setValue] =useState("");
    const [arr,setArr] = useState([]);

    function foo(e)
    {
        e.preventDefault();
        console.log(value);
        setArr([...arr,value]);
        setValue("");
    }

    function deleteElement(indx)
    {
        console.log("delete");
        let newArr=[];
        for(let i=0;i<arr.length;i++)
        {
            if(i != indx)
            {
                newArr.push(arr[i]);
            }
        }
        setArr([...newArr]);
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
            arr.map((temp,indx)=>
            {
                return (<div key={indx} style={{display: " flex",margin:"20px 0px"}}>
                    <li style={{margin:"0px 5px"}}>{temp}</li>

                    {/* to call function with parametersin react */}
                    <button onClick={() =>  deleteElement(indx)}>Delete</button>

                    <br/>
                </div> );
            })
        }
    </ul>
</div>
</>
  )
}

export default ToDo