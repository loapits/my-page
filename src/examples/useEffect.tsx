import React, { useState, useEffect } from 'react'

export const App = () => {
  const [type, setType] = useState('users')
  const [todoArr, setTodoArr] = useState([])
  const [pos, setPos] = useState({
    x: 0,
    y: 0
  })

  const mouseMoveHandler = (event: any) => {
    setPos({
      x: event.clientX,
      y: event.clientY
    })
  }

  useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/${type}`)
        .then(response => response.json())
        .then(json => setTodoArr(json))

      return () => {
        console.log('cleanType')
      }
  }, [type])

  useEffect(() => {
    console.log('ComponentDidMount')
    window.addEventListener('mousemove', mouseMoveHandler)

    return () => {
      window.removeEventListener('mousemove', mouseMoveHandler)
    }
  }, [])

  return(
    <div>
      <h1>Resourse: {type}</h1>

      <button onClick={() => setType('users')}>Пользователи</button>
      <button onClick={() => setType('todos')}>Туду</button>
      <button onClick={() => setType('posts')}>Посты</button>
      {/* <pre>{JSON.stringify(todoArr, null, 2)}</pre> */}
      <pre>{JSON.stringify(pos, null, 2)}</pre>
    </div>
  )
}