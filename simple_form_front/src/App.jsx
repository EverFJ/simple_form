import React, { useEffect, useState } from "react";
import AddStudent from "./components/AddStudent";
import NavBar from "./components/NavBar";
import StudentsList from "./components/StudentsList";

export default function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("localhost:8000/students")
      .then((res) => res.json())
      .then((data) => setStudents(data));
  }, []);

  return (
    <>
      <NavBar />
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <StudentsList students={students} />
          </div>
          <div className="col-md-6">
            <AddStudent />
          </div>
        </div>
      </div>
    </>
  );
}
