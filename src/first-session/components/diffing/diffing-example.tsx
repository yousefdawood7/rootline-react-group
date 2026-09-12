import { useState } from "react";

export default function Diffing() {
  const [showComponentA, setShowComponentA] = useState(true);
  return (
    <section>
      <button onClick={() => setShowComponentA((prev) => !prev)}>
        Toggle Component
      </button>
      {showComponentA ? <ComponentA /> : <ComponentB />}
    </section>
  );
}

function ComponentA() {
  return (
    <div>
      <h1>Component A</h1>
    </div>
  );
}

function ComponentB() {
  return (
    <div>
      <h1>Component B</h1>
    </div>
  );
}
