
// function App() {
// // javascript
// // console.log('hello from component ')

// const now = new Date();
// const a=10;
// const b=20;
// console.log(now,a+b)



//   return (
//     <div>
//       <p>Hello world ,it is {now.toString()} !</p>
//       <p>{a} plus {b} is {a+b} </p>
//     </div>
//   ); 
// }

// export default App;


import React from 'react'

function Hello() {
  return (
    <div>
<p>Hello{props.name},you are {props.age} years old!</p>

      </div>
  )
}
function App() {
  return (
    <div>
<h1>Greetings</h1>
<Hello name='saran' age={10+20}/>
<hello name='krish' age={20}/>

      </div>
  )
}


export default App
