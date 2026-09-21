export type Listener<T> = (payload: T) => void;

export class EventEmitter<TEventMap extends Record<string, unknown>> {
  private listeners: {
    [K in keyof TEventMap]?: Set<Listener<TEventMap[K]>>;
  } = {};

  on<K extends keyof TEventMap>(
    eventName: K,
    callback: Listener<TEventMap[K]>,
  ) {
    // prettier-ignore
    if (!this.listeners[eventName])
      this.listeners[eventName] = new Set();
    this.listeners[eventName].add(callback);

    return () => this.off(eventName, callback);
  }
  off<K extends keyof TEventMap>(
    eventName: K,
    callback: Listener<TEventMap[K]>,
  ) {
    this.listeners[eventName]?.delete(callback);
  }

  emit = <K extends keyof TEventMap>(eventName: K, payload: TEventMap[K]) => {
    this.listeners[eventName]?.forEach((el) => el(payload));
  };
}
