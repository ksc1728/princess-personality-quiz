import React from 'react';
import './Card.css';

const Card = ({ question, options, onOptionClick, current, total }) => {
  return (
    <div className="card">
      <h3>
        Q {current}. {question}
      </h3>
      <div className="options">
        {options.map((option, idx) => (
          <p
            key={idx}
            className="option"
            onClick={() => onOptionClick(option.princesses)}
          >
            {option.text}
          </p>
        ))}
      </div>
      <div className="progress">
        Question {current} / {total}
      </div>
    </div>
  );
};

export default Card;