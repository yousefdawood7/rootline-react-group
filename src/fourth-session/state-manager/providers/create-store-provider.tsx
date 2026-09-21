import { createStore } from "@/fourth-session/state-manager/create-store";
import { createContext, use, useRef, useSyncExternalStore } from "react";

type SelectorFor<T> = (store: T) => T[keyof T];

export const createStoreProvider = function <T extends Record<string, unknown>>(
  initialState: T,
) {
  type Store = ReturnType<typeof createStore<T>>;

  const Context = createContext<undefined | Store>(undefined);

  function Provider({ children }: { children: React.ReactNode }) {
    const storeRef = useRef<Store>(null);

    // prettier-ignore
    if (!storeRef.current)
      storeRef.current = createStore(initialState);

    return <Context value={storeRef.current}>{children}</Context>;
  }

  function useStore(selector?: SelectorFor<ReturnType<Store["getStore"]>>) {
    const storeContex = use(Context);

    if (storeContex === undefined)
      throw new Error("useStore used out of its provider");

    const data = useSyncExternalStore(storeContex.subscribe, () =>
      selector?.(storeContex.getStore()),
    );

    return [data, storeContex.setStore] as const;
  }

  return { Provider, useStore };
};
