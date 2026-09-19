import { spellcheckEvent } from "@/components/third-session/events/spellcheck.event";
import {
  getSnapshot,
  subscribe,
} from "@/components/third-session/utils/get-spellcheck";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useSyncExternalStore } from "react";

export default function SpellCheck() {
  const spellCheck = useSyncExternalStore(subscribe, getSnapshot);

  return (
    <div>
      <Button
        onClick={() => {
          window.dispatchEvent(spellcheckEvent);
        }}
      >
        Toggle Spellcheck ===&gt; {spellCheck ? "ENABLED" : "DISABLED"}
      </Button>
      <Input spellCheck={spellCheck} />
    </div>
  );
}
