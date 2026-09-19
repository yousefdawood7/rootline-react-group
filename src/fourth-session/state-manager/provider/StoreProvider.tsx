import { createStore } from "@/fourth-session/state-manager/create-store";
import React, {
  createContext,
  use,
  useEffect,
  useEffectEvent,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";

type SelectorFor<T> = (store: T) => T[keyof T];

export const createContextProvider = function <
  T extends Record<string, unknown>,
>(initialState: T) {
  type Store = ReturnType<typeof createStore<T>>;

  const Context = createContext<Store | undefined>(undefined);

  function Provider({ children }: { children: React.ReactNode }) {
    const storeRef = useRef<Store>(null);

    // prettier-ignore
    if (!storeRef.current)
        storeRef.current = createStore(initialState);

    return <Context value={storeRef.current}>{children}</Context>;
  }

  function useProvider(selector: SelectorFor<T>) {
    const storeRef = use(Context);

    if (storeRef === undefined)
      throw new Error("useProvider used out of its context");

    const selectorRef = useRef(selector);
    selectorRef.current = selector;

    const data = useSyncExternalStore(storeRef.subscribe, () =>
      selector(storeRef.getStore()),
    );
    return [data, storeRef.setState] as const;
  }

  return { Provider, useProvider };
};
