import { Button } from "@/components/ui/button";
import FlashComponent from "@/second-session/components/flash-component";
import { ThemeContext2 } from "@/second-session/providers/second-theme-provder";
import { useContextSelector } from "use-context-selector";

export default function ChangeDarkMode() {
  const setIsDarkMode = useContextSelector(
    ThemeContext2,
    (value) => value?.setIsDarkMode,
  );

  return (
    <FlashComponent>
      <Button onClick={() => setIsDarkMode?.((dark) => !dark)}>
        Toggle Dark Mode
      </Button>
    </FlashComponent>
  );
}
