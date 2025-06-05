import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

let [counter , setCounter] = useState(0)

  const addValue = () =>{
 setCounter(counter+1)
  //setCounter(counter+1)  interview question : - agar esee hi setCounter ko baar baar call karege to kya hoga??
  //setCounter(counter+1)   Ans :- kuch nhi hoga counter to ek hi baar add karega chale kitne baar bhi likhdo
  //setCounter(counter+1)    Reason : ye line number 8 me useState ki vajah se commands jo hai vo ek ek karke nhi           
  //setCounter(counter+1)       jaegi vo ek bundle banke ek sath jayegi 
                            // agar real me 4 baar hi inc karna hota to callback use karte
                            //like this
  /*setCounter(prevCounter => prevCounter +1)
  setCounter(prevCounter => prevCounter +1)
  setCounter(prevCounter => prevCounter +1)
  setCounter(prevCounter => prevCounter +1)*/
}

  const removeValue = () =>{
    setCounter(counter-1);
  }
  
   return (
  <>
  <h1>Hello World</h1>
  <h2>Counter Value : {counter}</h2>
  <button
  onClick = {addValue}>    Add Value  {counter} </button>
  <br />
  <button
  onClick = {removeValue}>    Remove Value  {counter}  </button>
  <p></p>
  </>
  )
}

export default App
