import { Input } from "@/components/ui/input";
import { useProvider } from "@/fourth-session/state-manager/hooks/useStore";

export function InputText() {
  const [state, setState] = useProvider((el) => el.name);

  return (
    <div>
      <label>Name</label>
      <Input
        value={state}
        onChange={(e) => setState({ name: e.target.value })}
      />
    </div>
  );
}

export function InputEmail() {
  const [state, setState] = useProvider((el) => el.email);

  return (
    <div>
      <label>Email</label>
      <Input
        value={state}
        onChange={(e) => setState({ email: e.target.value })}
      />
    </div>
  );
}
