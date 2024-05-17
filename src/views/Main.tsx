// import SetUpForm from 'src/components/setUpForm';
import React, { useState, useEffect } from 'react';
import GradeTable from 'src/components/GradeTable';
import { SetUpForm, FormData } from 'src/components/SetUpForm';
import { defaultPassingGrade } from 'src/utils/constants';
import "./Main.css";


const Main: React.FC = () => {
  const [formData, setFormData] = useState<FormData | null>(null);
  const [tableData, setTableData] = useState<Array<[string, string]>>([]);

  useEffect(() => {
    if (formData) {
      const gradeUnderPassing = (score: number) => (formData.passingGrade - formData.minGrade) * score / (formData.maxScore * formData.requirement / 100) + formData.minGrade;
      const gradeOverPassing = (score: number) => (formData.maxGrade - formData.passingGrade) * (score - (formData.maxScore * formData.requirement / 100)) / (formData.maxScore * (1 - formData.requirement / 100)) + formData.passingGrade;

      const result: Array<[string, string]> = [];
      for (let score = 0; score <= formData.maxScore; score += formData.increment) {
        const grade = score <= formData.maxScore * formData.requirement / 100 ? gradeUnderPassing(score) : gradeOverPassing(score);
        result.push([String((Math.round(score * 10) / 10).toFixed(1)), String((Math.round(grade * 10) / 10).toFixed(1))]);
      }

      if (formData.order === '↓') {
        result.reverse();
      }

      setTableData(result);
    }
  }, [formData]);
  
  
  const tableCount = Math.ceil(tableData.length/10);

  return (
    <div>
      <SetUpForm setFormData={setFormData} />
      <div className="table-wrapper" style={{ display: 'flex' }}>
        {Array.from({ length: tableCount }).map((_, index) => (
          <GradeTable
            key={index}
            data={tableData.slice(index * 10, (index + 1) * 10)}
            passingGrade={formData?.passingGrade ?? parseFloat(defaultPassingGrade)}
          />
        ))}
      </div>
    </div>
  );
};

export default Main;