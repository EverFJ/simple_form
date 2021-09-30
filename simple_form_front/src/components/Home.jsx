import React, { useEffect, useState } from "react";
import StudentList from "./StudentsList";
import AddStudent from "./AddStudent";

export default function Home() {
  const [students, setStudents] = useState([]);
  const [student, setStudent] = useState("");

  const handleChange = (e) => {
    setStudent(e.target.value);
  };

  const onClick = (students) => {
    // console.log(`e`, e);
    // e.preventDefault();
    setStudents(students);
  };

  useEffect(() => {
    fetch("http://localhost:8000/students")
      .then((res) => res.json())
      .then((data) => setStudents(data));
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <StudentList students={students} />
        </div>
        <div className="col-md-6">
          <AddStudent
            student={student}
            handleChange={handleChange}
            onClick={onClick}
          />
        </div>
      </div>
    </div>
  );
}
