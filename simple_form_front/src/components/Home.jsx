import React, { useEffect, useState } from "react";
import StudentList from "./StudentsList";
import AddStudent from "./AddStudent";

export default function Home() {
  const [students, setStudents] = useState([]);
  const [student, setStudent] = useState("");

  const handleChange = (e) => {
    setStudents(e.target.value);
  };

  const onClick = (students) => {
    setStudents(students);
  };

  useEffect(() => {
    fetch("http://localhost:8000/students")
      .then((res) => res.json())
      .then((data) => setStudents(data));
  }, []);

  return (
    <div>
      <StudentList students={students} />
      <AddStudent
        student={student}
        handleChange={handleChange}
        onClick={onClick}
      />
    </div>
  );
}
