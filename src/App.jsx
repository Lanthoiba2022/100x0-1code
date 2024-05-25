//real wrapper
function App(){
  return <div>
     <CardWrapper>
      Hello world.
     </CardWrapper>
  </div>

}

function CardWrapper({children}){
  return <div style={{border: "2px solid black"}}>
      {children}
  </div>
}

export default App












// function App(){
//   return <div>
//      <CardWrapper innerComponent={<TextComponent/>} />
//   </div>

// }

// function CardWrapper({innerComponent}){
//   return <div style={{border: "2px solid black"}}>
//       {innerComponent}
//   </div>
// }

// function TextComponent({}){
//   return <div>
//     hi there
//   </div>
// }

// export default App





// import React,  { useState } from "react"


// function App() {
// const [todos, setTodos] = useState([{
//   id:1,
//   title: "go to gym",
//   description: "go to gym today"
// }, {
//   id:2,
//   title: "go to school",
//   description: "go to school today"
// },{
//   id:3,
//   title: "go to office",
//   description: "go to office today"
// }])

// function addTodo(){
//   setTodos([...todos, {
//     id: 4,
//     title: Math.random(),
//     description: Math.random()
//   }])
// }

//   return (
//     <div>
//       <button onClick={addTodo}>Add a todo</button>
//       {todos.map(todo => <Todo title={todo.title} description={todo.description}></Todo>)}
//     </div>
//   )
// }

// function Todo({title, description}){
//   return <div>
//     <h1>
//       {title}
//     </h1>
//     <h5>
//       {description}
//     </h5>
//   </div>
// }

// export default App


// import { useState } from "react";

// function App() {
//   return (
//     <div>
//       <HeaderWithButton></HeaderWithButton>
//       <Header title="Lanthoiba2"></Header>
//       <Header title="Lanthoiba2"></Header>
//       <Header title="Lanthoiba2"></Header>
//     </div>
//   );
// }

// function HeaderWithButton() {
//   const [title, setTitle] = useState("Lanthoiba1");

//   function updateTitle() {
//     setTitle("My name is " + Math.random());
//   }

//   return (
//     <div>
//       <button onClick={updateTitle}>Update the title</button>
//       <Header title={title}></Header>
//     </div>
//   );
// }

// function Header({ title }) {
//   return <div>{title}</div>;
// }

// export default App;
