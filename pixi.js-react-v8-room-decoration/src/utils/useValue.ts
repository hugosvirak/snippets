import { useEffect, useState } from "react";

interface Value<T> {
  get(): T;
  addListener(listener: (val: T) => void): void;
  removeListener(listener: (val: T) => void): void;
}

export function useValue<T>(value: Value<T>): T {
  const [val, setValue] = useState(value.get);
  useEffect(() => {
    value.addListener(setValue);
    return () => {
      value.removeListener(setValue);
    };
  }, [value]);
  return val;
}
