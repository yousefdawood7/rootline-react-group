import { Input } from "@/components/ui/input";
import { useStore } from "@/fourth-session/components/store-provider";

export function InputText() {
  const [name, setState] = useStore((store) => store.name);

  return (
    <div>
      <label>Name</label>

      <Input
        value={name}
        onChange={(e) => setState({ name: e.target.value })}
      />
    </div>
  );
}

export function InputEmail() {
  const [email, setState] = useStore((store) => store.email);

  return (
    <div>
      <label>Email</label>

      <Input
        value={email}
        onChange={(e) => setState({ email: e.target.value })}
      />
    </div>
  );
}
