import React, { useState, useEffect } from 'react';

export default function Timer() {
  const [time, setTime] = useState(0);
  const [name, setName] = useState("");

  useEffect(()=>{
    //below function takes 2 arguement ( (), 1000)
    const intervalId = setInterval(()=>{
      setTime((prev)=>prev+1)
    }, 1000);

    return () =>{
      clearInterval(intervalId);
    }
  }, [])

  const handleChange = ({target}) => setName(target.value);
  
  return (
    <>
      <h1>Time: {time}</h1>
      <input onChange={handleChange} value={name} />
    </>
  );
}


