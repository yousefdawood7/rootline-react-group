import { store } from "@/fourth-session/state-manager/store";
import { useEffect, useEffectEvent, useState } from "react";

type SelectorObject = ReturnType<(typeof store)["getStore"]>;
type Selector = (
  storeSelector: SelectorObject,
) => SelectorObject[keyof SelectorObject];

export const useStore = function (selector: Selector) {
  const [state, setState] = useState(() => selector(store.getStore()));

  const effectEvent = useEffectEvent(
    (payload: ReturnType<(typeof store)["getStore"]>) => {
      setState(selector(payload));
    },
  );

  useEffect(() => {
    const unsubscribe = store.subscribe(effectEvent);

    return () => {
      unsubscribe();
    };
  }, []);

  return [state, store.setState] as const;
};
