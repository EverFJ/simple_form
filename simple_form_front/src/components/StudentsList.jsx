import React from "react";

export default function StudentsList(props) {
  return (
    <div>
      <h1 className="text-center">StudentsList</h1>
      <ul className="list-group">
        {props.students.map((elem) => {
          <li className="list-group-item">elem</li>;
        })}
      </ul>
    </div>
  );
}
