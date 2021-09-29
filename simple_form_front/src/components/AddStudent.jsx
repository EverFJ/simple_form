import React from "react";

export default function AddStudent(props) {
  return (
    <div>
      <h1 className="text-center">AddStudent</h1>
      <form action="http://127.0.0.1:8000/students" method="post">
        <div className="form-group row">
          <label className="col-md-4 col-form-label" htmlFor="student">
            Student name
          </label>
          <div className="col-md-2">
            <input className="form-group" type="text" name="student" />
          </div>
        </div>
        <button className="btn border-primary text-primary" type="submit">
          Send
        </button>
      </form>
    </div>
  );
}
