import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useStore } from "@/fourth-session/components/store-provider";

export function InputText() {
  const [, setState] = useStore();

  return (
    <div>
      <Button onClick={() => setState({ name: "" + Math.random() })}>
        Toggle
      </Button>
    </div>
  );
}

export function InputEmail() {
  const [name] = useStore((store) => store.name);

  return (
    <div>
      <label>Email</label>

      <Input value={name} />
    </div>
  );
}
