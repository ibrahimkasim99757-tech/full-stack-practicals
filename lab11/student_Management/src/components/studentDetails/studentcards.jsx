import { useContext, useState } from "react";
import { ThemeContext } from "../context/StudentContext";

function StudentCard({ student }) {
  const { themeText } = useContext(ThemeContext);
  const [textValue, setTextValue] = useState("");
  const [submittedText, setSubmittedText] = useState("");

  if (!student) {
    return null;
  }

  return (
    <div className="student-card">
      <h2>{student.name}</h2>
      <p className="theme-below-name">{themeText}</p>
      <p>Roll No: {student.rollNo}</p>
      <p>Class: {student.class}</p>

      <div className="student-input-row">
        <input
          type="text"
          value={textValue}
          onChange={(e) => setTextValue(e.target.value)}
          placeholder="Enter text"
          className="student-input"
        />
        <button className="ok-btn" onClick={() => setSubmittedText(textValue)}>
          OK
        </button>
      </div>

      <div className="student-input-box">
        {submittedText}
      </div>
    </div>
  );
}

export default StudentCard;
