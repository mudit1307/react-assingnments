import React, { useState } from 'react'

function EmailDomain() {
    const [store,setStore] = useState("");
    const [temp,setTemp] =useState("");

    function getDomain()
    {
      // console.log(temp);
      let x=temp.indexOf("@")+1;
      let y=temp.indexOf(".");
      setStore(temp.substring(x,y));
      // console.log(store);
    }

  return (
    <>
    <div>
        <input type="text" value={temp} onChange={(e) => setTemp(e.target.value)}/>
        <button onClick={getDomain}>Get Domain</button>
    </div>
    <p>{store}</p>
    </>
  )
}

export default EmailDomain