import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";

export default function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("127.0.0.1:8000/students")
      .then((res) => {
        console.log(`res`, res);
        res.json();
      })
      .then((data) => {
        console.log(`data`, data);
        setStudents(data);
      });
  }, []);

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home students={students || ["François", "Alexandre", "Fatoumata"]} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
