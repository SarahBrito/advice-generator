
import { useState, useEffect } from 'react'
import './App.scss'

function App() {
  const [advice, setAdvice] = useState('')

  useEffect(()=>{
    handleAdvice()
  }, [])

  const handleAdvice = () => {
    fetch('https://api.adviceslip.com/advice')
      .then(response => response.json())
      .then(data => setAdvice(data.slip))
  }

  return (
    <div className="App">
      <div className="container">
        <span className="title">
          ADVICE #{advice.id}
        </span>
        <span className="advice">
          {advice.advice}
        </span>
        <div className="divider"></div>
        <button className="generator-advice" onClick={handleAdvice}>
          <img src="https://images2.imgbox.com/55/78/85XeU456_o.png" alt="" />
        </button>
      </div>

      <div className="attribution">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
      Coded by <a href="https://portfolio-sarahbrito.vercel.app/">Sara Brito</a>.
  </div>
    </div>
  )
}

export default App
