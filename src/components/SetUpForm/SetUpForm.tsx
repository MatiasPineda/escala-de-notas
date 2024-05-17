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

result = []
for (let score = 0; score <= maxScore; score += increment) {
  const grade = score <= maxScore * requirement / 100 ? gradeUnderPassing(score) : gradeOverPassing(score);
  result.push([score, grade.toFixed(1)]);
}

*/

import React, { useEffect, useState } from 'react';
import { FormData } from 'src/components/SetUpForm';
import { defaultOrder, defaultMaxGrade, defaultIncrement, defaultMaxScore, defaultMinGrade, defaultPassingGrade, defaultRequirement } from 'src/utils/constants';
import "./SetUpForm.css";

interface SetUpFormProps {
  setFormData: (data: FormData) => void;
}

const SetUpForm: React.FC<SetUpFormProps> = ({ setFormData }) => {
  const [order, setOrder] = useState(defaultOrder);
  const [maxScore, setMaxScore] = useState(defaultMaxScore);
  const [requirement, setRequirement] = useState(defaultRequirement);
  const [minGrade, setMinGrade] = useState(defaultMinGrade);
  const [maxGrade, setMaxGrade] = useState(defaultMaxGrade);
  const [passingGrade, setPassingGrade] = useState(defaultPassingGrade);
  const [increment, setIncrement] = useState(defaultIncrement);


  const handleSubmit = () => {
    setFormData({
      order,
      maxScore: parseFloat(maxScore),
      requirement: parseFloat(requirement),
      minGrade: parseFloat(minGrade),
      maxGrade: parseFloat(maxGrade),
      passingGrade: parseFloat(passingGrade),
      increment: parseFloat(increment),
    });
  };


  useEffect(() => {
    handleSubmit();
  }, []);


  return (
    <form>
      <div>
        <label className="input-title">Puntaje Máximo:</label>
        <input
          type="number"
          inputMode="numeric"
          value={maxScore}
          onChange={(e) => setMaxScore(e.target.value)}
          step="0.1"
        />
      </div>
      <div>
        <label className="input-title">Exigencia:</label>
        <input
          type="number"
          inputMode="numeric"
          value={requirement}
          onChange={(e) => setRequirement(e.target.value)}
          step="0.1"
        />
      </div>
      <div>
        <label className="input-title">Nota mínima:</label>
        <input
          type="number"
          inputMode="numeric"
          value={minGrade}
          onChange={(e) => setMinGrade(e.target.value)}
          step="0.1"
        />
      </div>
      <div>
        <label className="input-title">Nota máxima:</label>
        <input
          type="number"
          inputMode="numeric"
          value={maxGrade}
          onChange={(e) => setMaxGrade(e.target.value)}
          step="0.1"
        />
      </div>
      <div>
        <label className="input-title">Nota aprobación:</label>
        <input
          type="number"
          inputMode="numeric"
          value={passingGrade}
          onChange={(e) => setPassingGrade(e.target.value)}
          step="0.1"
        />
      </div>
      <div>
        <label className="input-title">Incremento:</label>
        <input
          type="number"
          inputMode="numeric"
          value={increment}
          onChange={(e) => setIncrement(e.target.value)}
          step="0.1"
        />
      </div>
      <div>
        <label className="input-title">Orden:</label>
        <input
          type="radio"
          id="ascending"
          name="order"
          value="↑"
          checked={order === "↑"}
          onChange={(e) => setOrder(e.target.value)}
        />
        <label className="radio-label" htmlFor="ascending">↑</label>
        <input
          type="radio"
          id="descending"
          name="order"
          value="↓"
          checked={order === "↓"}
          onChange={(e) => setOrder(e.target.value)}
        />
        <label className="radio-label" htmlFor="descending">↓</label>
      </div>
      <button type="button" onClick={handleSubmit}>
        Generar
      </button>
    </form>
  );
};


export default SetUpForm;