import { Button } from "@/components/ui/button";
import FlashComponent from "@/second-session/components/flash-component";
import { useTheme } from "@/second-session/hooks/useTheme";

type ChangeDarkModeProps = {
  isFirst: boolean;
};

export default function ChangeDarkMode({
  isFirst = true,
}: ChangeDarkModeProps) {
  const { setIsDarkMode } = useTheme({ isFirst }).setIsDarkMode;

  return (
    <FlashComponent>
      <Button onClick={() => setIsDarkMode((dark) => !dark)}>
        Toggle Dark Mode
      </Button>
    </FlashComponent>
  );
}
