import React, { useState } from "react";
import './Quiz.css';
import Card from './Card.jsx';
import results from "./Result.json";


const Quiz = () => {
  const questions = [
  {
    "question": "What’s your ideal way to spend a free day?",
    "options": [
      { "text": "Reading books and learning new things 📚", "princesses": ["Belle"] },
      { "text": "Exploring a new place or culture 🌍", "princesses": ["Jasmine", "Ariel"] },
      { "text": "Spending time in nature and daydreaming 🌸", "princesses": ["Aurora", "Snow White"] },
      { "text": "Training or challenging yourself to be stronger 💪", "princesses": ["Mulan", "Merida"] }
    ]
  },
  {
    "question": "How would your friends describe you?",
    "options": [
      { "text": "Brave and determined", "princesses": ["Mulan", "Merida"] },
      { "text": "Kind and caring", "princesses": ["Snow White", "Cinderella"] },
      { "text": "Curious and adventurous", "princesses": ["Ariel", "Rapunzel"] },
      { "text": "Graceful and elegant", "princesses": ["Aurora", "Elsa"] }
    ]
  },
  {
    "question": "Which quality do you value most in yourself?",
    "options": [
      { "text": "Independence", "princesses": ["Jasmine", "Merida"] },
      { "text": "Creativity", "princesses": ["Rapunzel", "Ariel"] },
      { "text": "Compassion", "princesses": ["Cinderella", "Belle"] },
      { "text": "Confidence", "princesses": ["Elsa", "Mulan"] }
    ]
  },
  {
    "question": "If you could live anywhere, where would it be?",
    "options": [
      { "text": "A quiet library full of books 📖", "princesses": ["Belle"] },
      { "text": "A castle surrounded by nature 🌲", "princesses": ["Aurora", "Snow White"] },
      { "text": "An island or the ocean 🌊", "princesses": ["Ariel"] },
      { "text": "A bustling city full of opportunities 🏙️", "princesses": ["Jasmine", "Mulan"] }
    ]
  },
  {
    "question": "How do you handle challenges?",
    "options": [
      { "text": "Face them head-on with bravery ⚔️", "princesses": ["Mulan", "Merida"] },
      { "text": "Think through them calmly 🧠", "princesses": ["Belle", "Elsa"] },
      { "text": "Seek help from loved ones ❤️", "princesses": ["Cinderella", "Snow White"] },
      { "text": "Follow my instincts 🌟", "princesses": ["Ariel", "Rapunzel"] }
    ]
  },
  {
    "question": "What’s your favorite color theme?",
    "options": [
      { "text": "Blue or silver ❄️", "princesses": ["Elsa"] },
      { "text": "Gold or yellow 🌞", "princesses": ["Belle", "Rapunzel"] },
      { "text": "Pink or rose 🌸", "princesses": ["Aurora", "Cinderella"] },
      { "text": "Teal or green 🌊", "princesses": ["Ariel", "Jasmine", "Merida"] }
    ]
  },
  {
    "question": "What kind of story appeals to you the most?",
    "options": [
      { "text": "Overcoming fears and self-discovery 🌌", "princesses": ["Elsa"] },
      { "text": "Breaking the rules to follow your dreams 💫", "princesses": ["Ariel", "Jasmine"] },
      { "text": "Finding love through kindness 💖", "princesses": ["Cinderella", "Snow White"] },
      { "text": "Adventures and epic quests ⚔️", "princesses": ["Mulan", "Merida", "Rapunzel"] }
    ]
  },
  {
    "question": "How do you react when someone underestimates you?",
    "options": [
      { "text": "Prove them wrong with my actions 💥", "princesses": ["Mulan", "Merida"] },
      { "text": "Stay calm and let time show my worth ⏳", "princesses": ["Cinderella", "Elsa"] },
      { "text": "Speak up and stand for myself 🔥", "princesses": ["Jasmine"] },
      { "text": "Laugh it off — I know who I am 😄", "princesses": ["Rapunzel", "Belle"] }
    ]
  },
  {
    "question": "What’s your dream goal in life?",
    "options": [
      { "text": "To see the world and learn its secrets 🌍", "princesses": ["Ariel", "Jasmine"] },
      { "text": "To inspire others with kindness 💞", "princesses": ["Snow White", "Cinderella"] },
      { "text": "To master my inner strength and purpose 🌌", "princesses": ["Elsa", "Mulan"] },
      { "text": "To create and live freely 🎨", "princesses": ["Rapunzel", "Merida"] }
    ]
  },
  {
    "question": "What makes you happiest?",
    "options": [
      { "text": "Helping others and spreading positivity ☀️", "princesses": ["Snow White", "Cinderella"] },
      { "text": "Discovering new things 🧭", "princesses": ["Ariel", "Belle"] },
      { "text": "Being true to myself 🌈", "princesses": ["Elsa", "Jasmine"] },
      { "text": "Chasing adventures with passion 💃", "princesses": ["Merida", "Rapunzel"] }
    ]
  }
];

const [current, setCurrent] = useState(0);
  const [scores, setScores] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [finalPrincess, setFinalPrincess] = useState(null);

  const handleOptionClick = (princesses) => {
    const newScores = { ...scores };
    princesses.forEach((p) => {
      newScores[p] = (newScores[p] || 0) + 1;
    });
    setScores(newScores);

    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      calculateResult(newScores);
    }
  };

  const calculateResult = (finalScores) => {
    const princess = Object.keys(finalScores).reduce((a, b) =>
      finalScores[a] > finalScores[b] ? a : b
    );
    const resultData = results.find((r) => r.name === princess);
    setFinalPrincess(resultData);
    setShowResult(true);
  };

  
  return (
    

    <div className="quiz">
      {!showResult ? (
        <Card
          question={questions[current].question}
          options={questions[current].options}
          onOptionClick={handleOptionClick}
          current={current + 1}
          total={questions.length}
        />
      ) : (
        <div className="character">
          <h2>{finalPrincess.name}</h2>
          <img src={finalPrincess.image} alt={finalPrincess.name} width="200" />
          <p>{finalPrincess.description}</p>
          <Link to="/" className="restart-btn">Home page</Link>
        </div>
      )}
    </div>

  
  );
};

export default Quiz;
