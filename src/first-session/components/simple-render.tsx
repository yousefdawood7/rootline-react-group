import { useState } from "react";

export function SimpleRender() {
  const [counter, setCounter] = useState(0);
  console.log("Re-Rendered");

  return (
    <button
      onClick={(e) => {
        console.log("Synthetic Event: ", e, e.target, e.currentTarget);

        console.log(
          "NATIVE: ",
          e.nativeEvent,
          e.nativeEvent.target,
          e.nativeEvent.currentTarget,
        );

        setCounter((c) => c + 1);
      }}
    >
      Counter {counter}
    </button>
  );
}
