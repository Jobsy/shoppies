import React from "react";
import "./App.css";

import Body from "./components/Body";
import Form from "./components/Form";

function App() {
  return (
    <>
      <div id="loaderDiv">
        <div className="loader">Loading ... </div>
      </div>
      <div className="main-container">
        <h1>The Shoppies</h1>
      </div>
      <Form />
      <Body />
    </>
  );
}

export default App;
