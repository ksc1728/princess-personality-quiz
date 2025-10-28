import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import princess from '/assets/Cartoon.jpg'


const Home = () => {
  return (
    <div className="main">
      <h1>Princess Game</h1>
      <p>
        <b>Know the princess in you...</b>
        Take the quiz and answer the questions to know which of these princesses is you.
      </p>

      <Link to="/quiz" className="start-quiz-btn">
        <div className="quizmain">
          <img id="princess" src={princess} alt="princess" />
          <p>Start Quiz</p>
        </div>
      </Link>
    </div>
  )
}

export default Home
