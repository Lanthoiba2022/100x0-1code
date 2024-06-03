// import { useState } from 'react'
// import './App.css'
// import { useMemo } from 'react';

// function App() {
//   const [counter, setCount] = useState(0)
//   const [inputValue, setInputValue] = useState(1);

//   // let count = 0;
//   // for(let i=0; i <= inputValue; i++){
//   //   console.log("called");
//   //   count = count + i;
//   // }

//   let count = useMemo(() => {
//     console.log("memo got called")
//     let finalcount = 0;
//     for(let i =1; i <= inputValue; i++){
//       finalcount = finalcount + 1;
//     }
//     return finalcount;
//   }, [inputValue]);

//   return <div>
//     <input onChange={(e) => {setInputValue(e.target.value);}} placeholder={"Find the sum from 1 to n"}></input>
//     <br />
//     Sum from 1 to {inputValue} is {count}
//     <br />
//     <button onClick={() => {setCount(counter + 1);}}>Counter {counter}</button>
//   </div>
// }


// export default App


import { memo, useState } from "react";

function App() {
  const [count, setCount] = useState(0)

  function onClick() {
    console.log("child clicked")
  }

  return <div>
    <Child onClick={onClick} />
    <button onClick={() => {
      setCount(count + 1);
    }}>Click me {count}</button>
  </div>
}

const Child = memo(({onClick}) => {
  console.log("child render")

  return <div>
    <button onClick={onClick}>Button clicked</button>
  </div>
})

export default App; 