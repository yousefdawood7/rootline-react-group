import { Input } from "@/components/ui/input";
import { useStore } from "@/fourth-session/state-manager/hooks/useStore";

export function InputText() {
  const [store, setStore] = useStore((value) => value.name);

  return (
    <div>
      <label>Name</label>
      <Input
        value={store}
        onChange={(e) => setStore({ name: e.target.value })}
      />
    </div>
  );
}

export function InputEmail() {
  const [store, setStore] = useStore((value) => value.email);

  return (
    <div>
      <label>Email</label>
      <Input
        value={store}
        onChange={(e) => setStore({ email: e.target.value })}
      />
    </div>
  );
}
