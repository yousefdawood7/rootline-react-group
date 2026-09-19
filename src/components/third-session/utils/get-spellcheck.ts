let globalSpellcheck = false;

export const subscribe = function (callback: () => void) {
  const abortController = new AbortController();

  window.addEventListener(
    "spellcheck",
    () => {
      globalSpellcheck = !globalSpellcheck;
      callback();
    },
    { signal: abortController.signal },
  );

  return () => abortController.abort();
};

export const getSnapshot = function () {
  return globalSpellcheck;
};
