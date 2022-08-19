import "./App.css";
import React from "react";
import { Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import Home from "./components/Home/Home";
import DogDetail from "./components/CardDetail/DogDetail";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/home" component={Home} />
      <Route path="/home/:id" component={DogDetail} />
      {/*       <Route path="/dogs" component={CreateDog} />
       */}{" "}
    </div>
  );
}

export default App;
