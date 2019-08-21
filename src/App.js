import React from "react";

function Movie({ name }) {
  return <h1>I Like {name}</h1>;
}

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Movie name="Titanic" />
    </div>
  );
}

export default App;
