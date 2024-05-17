/*

const order = "↑"; // ↑ ↓
const maxScore = 100.0;
const requirement = 60.0;
const minGrade = 1.0;
const maxGrade = 7.0;
const passingGrade = 4.0;
const increment = 1.0;

gradeUnderPassing = (score) => (passingGrade - minGrade)*score/(maxScore*requirement/100)+minGrade
gradeOverPassing= (score) =>(maxGrade-passingGrade)*(score-(maxScore*requirement/100))/(maxScore*(1-requirement/100))+passingGrade

for (let score = 0; score <= maxScore; score += increment) {
  const grade = score <= maxScore * requirement / 100 ? gradeUnderPassing(score) : gradeOverPassing(score);
  console.log(`${grade.toFixed(1)}`);
}

*/

import React, { useState } from 'react';

const SetUpForm = ({ setStep, setFormData }) => {
  // Form that includes order maxScore requirement minGrade maxGrade passingGrade increment
  const [order, setOrder] = useState("↑");
  const [maxScore, setMaxScore] = useState(100.0);
  const [requirement, setRequirement] = useState(60.0);
  const [minGrade, setMinGrade] = useState(1.0);
  const [maxGrade, setMaxGrade] = useState(7.0);
  const [passingGrade, setPassingGrade] = useState(4.0);
  const [increment, setIncrement] = useState(1.0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      order,
      maxScore,
      requirement,
      minGrade,
      maxGrade,
      passingGrade,
      increment,
    });
    setStep(1);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Order:</label>
        <select value={order} onChange={(e) => setOrder(e.target.value)}>
          <option value="↑">↑</option>
          <option value="↓">↓</option>
        </select>
      </div>
      <div>
        <label>Max Score:</label>
        <input type="number" value={maxScore} onChange={(e) => setMaxScore(e.target.value)} />
      </div>
      <div>
        <label>Requirement:</label>
        <input type="number" value={requirement} onChange={(e) => setRequirement(e.target.value)} />
      </div>
      <div>
        <label>Min Grade:</label>
        <input type="number" value={minGrade} onChange={(e) => setMinGrade(e.target.value)} />
      </div>
      <div>
        <label>Max Grade:</label>
        <input type="number" value={maxGrade} onChange={(e) => setMaxGrade(e.target.value)} />
      </div>
      <div>
        <label>Passing Grade:</label>
        <input type="number" value={passingGrade} onChange={(e) => setPassingGrade(e.target.value)} />
      </div>
      <div>
        <label>Increment:</label>
        <input type="number" value={increment} onChange={(e) => setIncrement(e.target.value)} />
      </div>
      <button type="submit">Next</button>
    </form>
  );
}

export default SetUpForm;
