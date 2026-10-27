import { useContext } from "react";
import { CountContext, StudentContext } from "../context/StudentContext";
import StudentCard from "./studentcards";

function StudentList() {
  const { students } = useContext(StudentContext);
  const { count, setCount } = useContext(CountContext);

  return (
    <div className="student-list">
      <div className="student-controls">
        <button className="count-btn" onClick={() => setCount((prev) => prev + 1)}>
          Count is {count}
        </button>
      </div>

      <div className="student-grid">
        {students.map((student) => (
          <StudentCard key={student.rollNo} student={student} />
        ))}
      </div>
    </div>
  );
}

export default StudentList;
