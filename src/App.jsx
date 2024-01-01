import { useState } from 'react'
import './App.css'
import resumelogo from './assets/resume-maker.jpg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <h1>Resume Generator for NIT Rourkela</h1>
      <img src={resumelogo} className="resume-logo" alt="resume logo"/>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
