import { useState } from 'react'
import './App.css'
import { JuegoApp } from './components/JuegoApp.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <JuegoApp />
    </>
  )
}

export default App
