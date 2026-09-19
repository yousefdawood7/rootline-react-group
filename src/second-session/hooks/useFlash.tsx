import { useEffect, useRef } from "react";

export const useFlash = function () {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // prettier-ignore
    if (!containerRef.current)
      return;

    const element = containerRef.current;

    element.classList.add("outline", "outline-7", "outline-red-500");

    const id = setTimeout(
      () => element.classList.remove("outline", "outline-7", "outline-red-500"),
      750,
    );

    return () => clearInterval(id);
  });

  return containerRef;
};
