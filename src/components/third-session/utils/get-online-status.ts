export const subscribe = function (callback: () => void) {
  const abortController = new AbortController();

  window.addEventListener("online", callback, {
    signal: abortController.signal,
  });
  window.addEventListener("offline", callback, {
    signal: abortController.signal,
  });

  return () => abortController.abort();
};

export const getSnapshot = function () {
  return navigator.onLine;
};
