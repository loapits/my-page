import React, { useState } from 'react'

function computeInitialCount() {
  console.log('Some calculation')
  return Math.trunc(Math.random() * 20)
}

export const App = () => {
  // const [counter, setCounter] = useState(0)
  // const [counter, setCounter] = useState(computeInitialCount())
  const [counter, setCounter] = useState(() => computeInitialCount())

  const [state, setState] = useState({
    title: 'Counter',
    date: Date.now()
  })

  function increment() {
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    
    setCounter(prevState => {
      return prevState + 1
    })
    // setCounter(prev => prev + 1)
  }
  
  function decrement() {
    setCounter(counter - 1)
  }

  function updTitle() {
    setState(prevState => {
      return{
      ...prevState,
      title: 'hello'
      }
    })
  }
  return(
    <div>
      <h1>Счетчик: { counter }</h1>
      <button onClick={ increment }>Добавить</button>
      <button onClick={ decrement }>Убрать</button>
      <button onClick={ updTitle }>DEf</button>

      <pre>
        {JSON.stringify(state, null, 2)}
      </pre>
    </div>
  )
}