import React from "react";

export default function StudentsList(props) {
  console.log(`StudentList -> props.students`, props.students);
  return (
    <div>
      <h1 className="text-center">StudentsList</h1>
      <ul className="list-group">
        {props.students.map((student) => (
          <li key={student} className="list-group-item">
            {student}
          </li>
        ))}
      </ul>
    </div>
  );
}
