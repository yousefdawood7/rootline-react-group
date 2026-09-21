import { Button } from "@/components/ui/button";
import {
  useAuthEmit,
  useAuthSubscribe,
} from "@/fifth-session/features/auth/providers/auth-provider";

export default function Logout() {
  const [emit, channelPost] = useAuthEmit();
  useAuthSubscribe("logout", () => {});

  return (
    <div>
      <p>Logout Page</p>
      <Button
        onClick={() => {
          emit("logout", undefined);
          channelPost("logout", undefined);
        }}
      >
        Logout
      </Button>
    </div>
  );
}
