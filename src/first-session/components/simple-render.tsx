import VerySlowComponent from "@/first-session/components/very-slow-component";
import React, { useState } from "react";

type SimpleRenderProps = {
  children: React.ReactElement;
};

export function SimpleRender({ children }: SimpleRenderProps) {
  const [counter, setCounter] = useState(0);

  console.log("Rendered");

  return (
    <>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        counter: {counter}
      </button>

      {children}
    </>
  );
}
