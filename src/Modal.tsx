import * as React from "react";
import { useEffect, useRef, ReactNode } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.getElementById("modal-root") as HTMLElement;

const Modal : React.FC<{ children: ReactNode }> = ({ children }) => {
  const elRef = useRef<HTMLDivElement | null>(null);

  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }

  useEffect(() => {
    const el = elRef.current!;
    modalRoot.appendChild(el);

    return () => {
      modalRoot.removeChild(el);
    }
  }, []);

  return createPortal(children, elRef.current);
}

export { Modal }