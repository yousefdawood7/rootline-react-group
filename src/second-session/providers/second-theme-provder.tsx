import React, { useState } from "react";
import { createContext } from "use-context-selector";
// eslint-disable-next-line react-refresh/only-export-components
export const ThemeContext2 = createContext<
  | undefined
  | {
      isDarkMode: boolean;
      setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
    }
>(undefined);

type SecondThemeProvider = {
  children: React.ReactNode;
};

export function SecondThemeProvider({ children }: SecondThemeProvider) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <ThemeContext2.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </ThemeContext2.Provider>
  );
}
