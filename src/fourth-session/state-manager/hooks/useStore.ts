import { store } from "@/fourth-session/state-manager/store";
import { useEffect, useEffectEvent, useState } from "react";

type StoreObject = ReturnType<(typeof store)["getStore"]>;
type Selector = (store: StoreObject) => StoreObject[keyof StoreObject];

export const useStore = function (selector: Selector) {
  const [state, setState] = useState(() => selector(store.getStore()));

  const callback = useEffectEvent((payload: StoreObject) =>
    setState(selector(payload)),
  );

  useEffect(() => {
    const unsubscribe = store.subscribe(callback);

    return () => {
      unsubscribe();
    };
  }, []);

  return [state, store.setStore] as const;
};
