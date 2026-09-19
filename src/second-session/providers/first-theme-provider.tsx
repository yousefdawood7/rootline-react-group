import VerySlowComponent from "@/first-session/components/very-slow-component";
import { Counter } from "@/second-session/components/counter-component";
import ChangeDarkMode from "@/second-session/components/dark-mode/change-dark-mode";
import IsDarkMode from "@/second-session/components/dark-mode/is-dark-mode";
import React, { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const ThemeContext1 = createContext<
  | undefined
  | {
      isDarkMode: boolean;
      setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
    }
>(undefined);

export function FirstThemeProvider() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <ThemeContext1 value={{ isDarkMode, setIsDarkMode }}>
      <ChangeDarkMode isFirst />
      <IsDarkMode isFirst />
      <Counter />
      <VerySlowComponent />
    </ThemeContext1>
  );
}
