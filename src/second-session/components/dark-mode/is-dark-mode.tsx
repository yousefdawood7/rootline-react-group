import FlashComponent from "@/second-session/components/flash-component";
import { useTheme } from "@/second-session/hooks/useTheme";

type IsDarkModeProps = {
  isFirst: boolean;
};

export default function IsDarkMode({ isFirst = true }: IsDarkModeProps) {
  const { isDarkMode } = useTheme({ isFirst });

  return (
    <FlashComponent>
      We're In {isDarkMode ? "Dark" : "Light"} Mode
    </FlashComponent>
  );
}
