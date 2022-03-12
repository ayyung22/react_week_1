import "./App.css";
import React from "react";
import ReactDOM from "react-dom";
import LoginForm from "./LoginForm";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <LoginForm />
    </div>
  );
}

export default App;
