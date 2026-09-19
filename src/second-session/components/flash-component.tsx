import { useFlash } from "@/second-session/hooks/useFlash";
import type React from "react";

type FlashComponentProps = {
  children: React.ReactNode;
};

export default function FlashComponent({ children }: FlashComponentProps) {
  const containerRef = useFlash();

  return (
    <div ref={containerRef} className="border-3 border-black m-5">
      {children}
    </div>
  );
}
