import { ThemeContext1 } from "@/second-session/providers/first-theme-provider";
import { ThemeContext2 } from "@/second-session/providers/second-theme-provder";
import { use } from "react";

type UseThemeType = {
  isFirst: boolean;
};

export function useTheme({ isFirst = true }: UseThemeType) {
  const data = use(isFirst ? ThemeContext1 : ThemeContext2);

  // prettier-ignore
  if (data === undefined)
    throw new Error("Context used out of its provider");

  return data;
}
