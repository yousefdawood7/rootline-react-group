import FlashComponent from "@/second-session/components/flash-component";
import { ThemeContext2 } from "@/second-session/providers/second-theme-provder";
import { useContextSelector } from "use-context-selector";

export default function IsDarkMode() {
  const isDarkMode = useContextSelector(
    ThemeContext2,
    (value) => value?.isDarkMode,
  );

  return (
    <FlashComponent>
      We're In {isDarkMode ? "Dark" : "Light"} Mode
    </FlashComponent>
  );
}
