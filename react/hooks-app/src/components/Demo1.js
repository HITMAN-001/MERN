import React, { useEffect, useState } from 'react'

function Demo1() {
//initialize the state
const [count, setCount] = useState(10)

const inc=()=>{
    setCount(count + 1)
}

//useEffect is combination of  didMount and didUpdate
useEffect(() => {
  console.log("useEffect called")
},[count]) //if count is changed then only useEffect will be called

  return (
    <div>
      <p> The count is {count}</p>
      <div></div>
      <button onClick={inc}>Increment</button>
    </div>
  );
}

export default Demo1
