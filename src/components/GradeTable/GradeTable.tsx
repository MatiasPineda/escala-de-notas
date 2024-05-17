import React from "react";
import "./GradeTable.css";

interface GradeTableProps {
  data: Array<[string, string]>;
  passingGrade: number;
}


const GradeTable: React.FC<GradeTableProps> = ({ data, passingGrade }) => {
  const underPassingGrade = (mark: string) => passingGrade > parseFloat(mark);
  return (
    <table className="grade-table">
      <thead>
        <tr>
          <th>Puntaje</th>
          <th>Nota</th>
        </tr>
      </thead>
      <tbody>
        {data.map(([score, mark], index) => (
          <tr key={index}>
            <td>{score}</td>
            <td className={underPassingGrade(mark) ? "under-passing-grade" : ""}>{mark}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};


export default GradeTable;
