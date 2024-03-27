"use client";

import {
  ForwardRefExoticComponent,
  MutableRefObject,
  RefAttributes,
  useEffect,
  useRef,
  useState,
} from "react";
import { IWrappedComponentProps } from "../../../types/IWrappedComponentProps";

export function ClickOutside(
  WrappedComponent: ForwardRefExoticComponent<
    IWrappedComponentProps & RefAttributes<HTMLDivElement>
  >
) {
  const Component = () => {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef() as MutableRefObject<HTMLDivElement>;

    useEffect(() => {
      const handleClickOutside = (e: MouseEvent) => {
        if (!ref.current.contains(e.target as HTMLDivElement)) {
          setIsOpen(false);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);

      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }, [ref]);

    return <WrappedComponent isOpen={isOpen} setIsOpen={setIsOpen} ref={ref} />;
  };

  return Component;
}
