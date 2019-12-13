import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import HomePage from "./Components/Home/HomePage";
import AboutPage from "./Components/About/AboutPage";
import Header from "./Components/Common/Header";
import PageNotFound from "./Components/PageNotFound";
import CoursePage from "./Components/Courses/CoursesPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/courses" component={CoursePage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
