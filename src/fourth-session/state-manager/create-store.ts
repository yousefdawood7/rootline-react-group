type SetState<T> = T | ((prevValue: T) => T);

export const createStore = function <T extends Record<string, unknown>>(
  initialState: T,
) {
  let store = initialState;
  const subscribers = new Set<(value: T) => void>();

  return {
    getStore: () => store,
    setStore: (value: SetState<Partial<T>>) => {
      store = {
        ...store,
        ...(typeof value === "function" ? value(store) : value),
      };

      subscribers.forEach((sub) => sub(store));
    },

    subscribe(subscriber: (value: SetState<T>) => void) {
      subscribers.add(subscriber);
      return () => subscribers.delete(subscriber);
    },
  };
};
