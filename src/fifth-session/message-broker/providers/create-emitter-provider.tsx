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
  TEvent extends Record<string, unknown>,
>(channelMessage?: string) {
  const EmitterContext = createContext<
    undefined | { bus: EventEmitter<TEvent>; channel: BroadcastChannel | null }
  >(undefined);

  function Provider({ children }: { children: React.ReactNode }) {
    const busRef = useRef<EventEmitter<TEvent>>(null);

    const channelRef = useRef<BroadcastChannel>(null);

    if (!busRef.current) busRef.current = new EventEmitter<TEvent>();

    if (!channelRef.current && channelMessage)
      channelRef.current = new BroadcastChannel(channelMessage);

    useEffect(() => {
      const abortController = new AbortController();

      channelRef.current?.addEventListener(
        "message",
        <K extends keyof TEvent>(
          e: MessageEvent<{ eventName: K; payload: TEvent[K] }>,
        ) => {
          busRef.current?.emit(e.data.eventName, e.data.payload);
        },
        { signal: abortController.signal },
      );

      return () => {
        channelRef.current?.close();
        abortController.abort();
      };
    }, []);

    return (
      <EmitterContext
        value={{ bus: busRef.current, channel: channelRef.current }}
      >
        {children}
      </EmitterContext>
    );
  }

  function useSubscribe<K extends keyof TEvent>(
    eventName: K,
    handler: Listener<TEvent[K]>,
  ) {
    const data = use(EmitterContext);

    if (data === undefined)
      throw new Error("useSubscribe used out of its context");

    const { bus } = data;

    const effectEvent = useEffectEvent(handler);

    useEffect(() => {
      const unSubscribe = bus.on(eventName, effectEvent);

      return () => {
        unSubscribe();
      };
    }, [eventName, bus]);
  }

  function useEmit<K extends keyof TEvent>() {
    const data = use(EmitterContext);

    if (data === undefined)
      throw new Error("useSubscribe used out of its context");

    const { bus, channel } = data;

    function handlePostMessage(eventName: K, payload: TEvent[K]) {
      channel?.postMessage({ eventName, payload });
    }

    return [bus.emit, handlePostMessage] as const;
  }

  return { Provider, useSubscribe, useEmit };
};
