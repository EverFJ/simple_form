import React, { useEffect, useState } from "react";
import StudentList from "./StudentsList";
import AddStudent from "./AddStudent";
import Error from "./Error";

export default function Home() {
  const [students, setStudents] = useState([]);
  const [student, setStudent] = useState("");
  const [error, SetError] = useState(false);

  const handleChange = (e) => {
    setStudent(e.target.value);
  };

  const onClick = (students) => {
    setStudents(students);
  };

  const showError = () => {
    SetError(true);
  };

  const hideError = () => {
    SetError(false);
  };

  useEffect(() => {
    fetch("http://localhost:8000/students")
      .then((res) => res.json())
      .then((data) => setStudents(data));
  }, []);

  return (
    <div className="container">
      {!error ? (
        <div className="row">
          <div className="col-md-6">
            <StudentList students={students} />
          </div>
          <div className="col-md-6">
            <AddStudent
              student={student}
              handleChange={handleChange}
              onClick={onClick}
              showError={showError}
            />
          </div>
        </div>
      ) : (
        <div className="row">
          <div className="col-md-6">
            <StudentList students={students} />
          </div>
          <div className="col-md-6">
            <Error hideError={hideError} />
          </div>
        </div>
      )}
    </div>
  );
}
