import { Input } from "@/components/ui/input";
import { useStore } from "@/fourth-session/state-manager/hooks/useStore";

export default function InputText() {
  const [state, setStore] = useStore((store) => store.name)!;

  return (
    <div>
      <label>Name</label>
      <Input
        type="text"
        value={state}
        onChange={(e) => {
          setStore({ name: e.target.value });
        }}
      />
    </div>
  );
}

export function InputEmail() {
  const [state, setStore] = useStore((store) => store.email)!;

  return (
    <div>
      <label>Email</label>
      <Input
        type="text"
        value={state}
        onChange={(e) => {
          setStore({ email: e.target.value });
        }}
      />
    </div>
  );
}
