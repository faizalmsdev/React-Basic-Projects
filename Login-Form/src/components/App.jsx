import React from "react";
import Form from "./Form";

var userIsRegistered = true;

function App() {
  return (
    <div className="container">
      <h1>Good To See You!</h1>
      <Form 
      isRegistered = {userIsRegistered}
      />
    </div>
  );
}

export default App;
