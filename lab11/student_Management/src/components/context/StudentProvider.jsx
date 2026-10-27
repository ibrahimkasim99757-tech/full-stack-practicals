import { useState } from "react";
import { CountContext, StudentContext, ThemeContext } from "./StudentContext";

export const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState([
    { name: "Rahul", rollNo: 101, class: "BCA" },
    { name: "Priya", rollNo: 102, class: "BCA" },
    { name: "Amit", rollNo: 103, class: "BCA" }
  ]);

  const [count, setCount] = useState(0);
  const [themeText, setThemeText] = useState("Light");

  return (
    <StudentContext.Provider value={{ students, setStudents }}>
      <CountContext.Provider value={{ count, setCount }}>
        <ThemeContext.Provider value={{ themeText, setThemeText }}>
          {children}
        </ThemeContext.Provider>
      </CountContext.Provider>
    </StudentContext.Provider>
  );
};
