import { useState } from 'react'

import './App.css'
import Display from './components/Display'
import ButtonContainer from './components/ButtonContainer'

function App() {
  const [input,updateInput] = useState('')

  const calBtn = ['c', '1', '2', "+", '3','4', '-', '5', '6', '*', '7', '8', '/', '=', '9', '0', '.', '←']
  
  function addInput(btn) {
    if (btn == 'c') {
      updateInput(' ')
    } else if (btn == '=') {
      
      updateInput(eval(input))
    } else if (btn == '←') {
      let strInput = input.toString()
      console.log(typeof(strInput))
      
      console.log()
      updateInput(strInput.substr(0, strInput.length - 1))


    } else {
       updateInput(input+btn) 
    }
  }
  return (
    <div className="calculator-container">
      <Display input={ input} />
      <ButtonContainer addInput={addInput } calBtn={calBtn} />

  </div>
  )
}

export default App
