import React, { useState, useEffect, useRef } from 'react'

export const App = () => {
  const inputRef = useRef(null)
  const renderCount = useRef(1)
  const [value, setValue] = useState(1)

  useEffect(() => {
    renderCount.current++
    console.log(inputRef.current);
    
  })

  return(
    <div>
      <h1>Render counts</h1>
      <div>{renderCount.current}</div>
      <button onClick={() => setValue(value + 1)}>inct</button>
      <input ref={inputRef} />
    </div>
  )
}