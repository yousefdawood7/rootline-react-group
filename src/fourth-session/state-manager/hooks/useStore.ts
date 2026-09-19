import { store } from "@/fourth-session/store";
import { useEffect, useState, useSyncExternalStore } from "react";

type StoreReturn = ReturnType<(typeof store)["getStore"]>;
type Selector = (storeSelector: StoreReturn) => StoreReturn[keyof StoreReturn];

export const useStore = function (selector: Selector) {
  // const [state, setState] = useState(() => selector(store.getStore()));
  //
  // useEffect(() => {
  //   const unsubscribe = store.subscribe((payload) => {
  //     const resolved =
  //       typeof payload === "function" ? payload(store.getStore()) : payload;
  //
  //     setState(selector(resolved));
  //   });
  //
  //   return () => {
  //     unsubscribe();
  //   };
  // }, [selector]);

  const state = useSyncExternalStore(store.subscribe, () =>
    selector(store.getStore()),
  );

  return [state, store.setStore] as const;
};
