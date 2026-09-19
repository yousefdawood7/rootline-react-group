import { Button } from "@/components/ui/button";
import FlashComponent from "@/second-session/components/flash-component";
import { useState } from "react";

export function Counter() {
  const [counter, setCounter] = useState(0);

  console.log("Yousef");

  return (
    <FlashComponent>
      <Button onClick={() => setCounter((c) => c + 1)}>
        Counter: {counter}
      </Button>
    </FlashComponent>
  );
}
