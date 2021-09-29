import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";

export default function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("localhost:8000/students")
      .then((res) => {
        console.log(`res`, res);
        // setStudents(res)
      })
      .then((data) => {
        console.log(`data`, data);
        setStudents(data);
      });
  }, []);

  return (
    <BrowserRouter>
      <NavBar />
      <Route exact path="/">
        <Home students={students} />
      </Route>
    </BrowserRouter>
  );
}
