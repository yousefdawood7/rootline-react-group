type SetState<T> = T | ((prev: T) => T);

export const createStore = function <T extends Record<string, unknown>>(
  initialState: T,
) {
  let store = initialState;
  const subscribers = new Set<(value: T) => void>();

  return {
    getStore: () => store,
    setState: (state: SetState<Partial<T>>) => {
      store = {
        ...store,
        ...(typeof state === "function" ? state(store) : state),
      };

      subscribers.forEach((sub) => sub(store));
    },

    subscribe: (callback: (value: T) => void) => {
      subscribers.add(callback);
      return () => subscribers.delete(callback);
    },
  };
};
