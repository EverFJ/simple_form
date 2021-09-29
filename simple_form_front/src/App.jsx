import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";

export default function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/students")
      .then((res) => res.json())
      .then((data) => setStudents(data));
  }, []);

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home students={students} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
