import React from "react";
function Potato({ potato }) {
  return <h3>I Like Potato {potato}</h3>;
}
const foodLike = [];
function App() {
  return (
    <div>
      <h2>Hello</h2>
      <Potato potato="yammy" />
    </div>
  );
}

export default App;
