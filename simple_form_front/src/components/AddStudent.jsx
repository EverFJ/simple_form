import React from "react";

export default function AddStudent(props) {
  const { onClick, handleChange, student } = props;
  return (
    <div>
      <h1 className="text-center">AddStudent</h1>
      {/* <form> */}
      <div className="form-group row">
        <label className="col-md-4 col-form-label" htmlFor="student">
          Student name
        </label>
        <div className="col-md-2">
          <input
            className="form-group"
            type="text"
            name="student"
            value={student}
            onChange={handleChange}
          />
        </div>
      </div>
      <button
        className="btn border-primary text-primary"
        onClick={() => {
          fetch("http://localhost:8000/students", {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({ student: student }),
          })
            .then((res) => res.json())
            .then((data) => onClick(data));
        }}
      >
        Send
      </button>
      {/* </form> */}
    </div>
  );
}
