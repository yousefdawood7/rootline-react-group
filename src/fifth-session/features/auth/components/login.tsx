import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuthEmit } from "@/fifth-session/features/auth/providers/auth-provider";
import { createPortal } from "react-dom";

const user = {
  name: "yousef",
  password: "123123",
};

export default function Login() {
  const [emitBus, postChannel] = useAuthEmit();
  return (
    <form
      action={(formData) => {
        const formObject = Object.fromEntries(formData) as typeof user;

        console.log(user, formObject);
        if (JSON.stringify(user) !== JSON.stringify(formObject)) return;

        emitBus("login", formObject);
        postChannel("login", formObject);
      }}
    >
      <Input type="text" name="name" />
      <br />
      <Input type="password" name="password" />
      <br />
      {createPortal(
        <Button
          type="submit"
          onClick={(e) => {
            console.log(e.target);
            console.log(e.currentTarget);
          }}
        >
          submit
        </Button>,
        document.body,
      )}
    </form>
  );
}
