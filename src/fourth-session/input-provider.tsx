import { useStore } from "@/fourth-session/state-manager/hooks/useStore";
import React, { createContext } from "react";

function useProviderStore() {
  const [state, setStore] = useStore();
  return { state, setStore };
}

// eslint-disable-next-line react-refresh/only-export-components
export const InputContext = createContext<
  undefined | ReturnType<typeof useProviderStore>
>(undefined);

type InputProviderProps = {
  children: React.ReactNode;
};

export function InputProvider({ children }: InputProviderProps) {
  const { state, setStore } = useProviderStore();

  return <InputCont value={{ state, setStore }}>{children}</InputCont>;
}
