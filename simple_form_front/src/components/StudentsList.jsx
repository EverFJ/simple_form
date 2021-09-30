import React from "react";

export default function StudentsList(props) {
  const { students } = props;
  // console.log(`StudentList -> students`, students);
  return (
    <div>
      <h1 className="text-center">StudentsList</h1>
      <ul className="list-group">
        {props.students.map((elem) => (
          <li key={elem} className="list-group-item">
            {elem}
          </li>
        ))}
      </ul>
    </div>
  );
}
