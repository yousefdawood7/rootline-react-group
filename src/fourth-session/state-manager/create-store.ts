type Listener<T> = (value: T) => void;
type SetState<T> = T | ((prev: T) => T);

export const createStore = function <T extends Record<string, unknown>>(
  initialState: T,
) {
  let store = initialState;
  const listeners: Set<Listener<T>> = new Set();

  return {
    getStore: () => store,
    setStore: (value: SetState<Partial<T>>) => {
      store = {
        ...store,
        ...(typeof value === "function" ? value(store) : value),
      };

      listeners.forEach((listener) => listener(store));
    },
    subscribe: (listener: Listener<T>) => {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
  };
};
