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
        <p>Made by <code>Yash Hegde </code>@NIT Rourkela</p>

        Get in touch with me on <br>
        </br><a href="https://www.linkedin.com/in/yash-hegde-927721201/">LinkedIn</a>
        <br>
        </br>
        <a href="https://twitter.com/YashHegde7">Twitter</a>
        <br>
        </br>
        {/* onclick: redirect to email at yash4success@gmail.com */}
        <a href="mailto:yash4success@gmail.com">Gmail</a>
        <br>
        </br>
         <a href="https://github.com/Yh010">Github</a>
      </div>
      
    </>
  )
}

export default App
