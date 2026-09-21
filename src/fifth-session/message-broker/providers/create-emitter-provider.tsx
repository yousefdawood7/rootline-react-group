import {
  EventEmitter,
  type Listener,
} from "@/fifth-session/message-broker/event-emitter";
import React, {
  createContext,
  use,
  useEffect,
  useEffectEvent,
  useRef,
} from "react";

export const createEmitterProvider = function <
  T extends Record<string, unknown>,
>() {
  type EmitterType = InstanceType<typeof EventEmitter<T>>;

  const EmitterContext = createContext<undefined | EmitterType>(undefined);

  function Provider({ children }: { children: React.ReactNode }) {
    const emitterRef = useRef<EmitterType>(null);

    // prettier-ignore
    if (!emitterRef.current)
      emitterRef.current = new EventEmitter<T>();

    return (
      <EmitterContext value={emitterRef.current}>{children}</EmitterContext>
    );
  }

  function useSubscribe<K extends keyof T>(
    eventName: K,
    handler: Listener<T[K]>,
  ) {
    const bus = use(EmitterContext);

    if (bus === undefined)
      throw new Error("useProvider used out of its context");

    const eventCallback = useEffectEvent(handler);

    useEffect(() => {
      const unsubscribe = bus.on(eventName, eventCallback);
      return () => unsubscribe();
    }, [bus, eventName]);

    return bus.emit;
  }

  function useEmit() {
    const bus = use(EmitterContext);

    if (bus === undefined)
      throw new Error("useProvider used out of its context");

    return bus.emit;
  }

  return { Provider, useEmit, useSubscribe };
};
