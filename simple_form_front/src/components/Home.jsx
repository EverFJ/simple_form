import React from "react";
import AddStudent from "./AddStudent";
import StudentsList from "./StudentsList";

export default function Home(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <StudentsList students={props.students} />
        </div>
        <div className="col-md-6">
          <AddStudent />
        </div>
      </div>
    </div>
  );
}
