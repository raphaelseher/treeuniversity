import { SetStateAction, useState } from "react";
var store = require("store");

abstract class Storage {
  public static addTestData(): void {
    store.set("1", {
      firstname: "Raphael",
      lastname: "Seher",
      birthDate: new Date(1993, 12, 3),
    });
    store.set("2", { firstname: "Pavel" });
    store.set("3", { firstname: "Phillipp" });
  }

  public static dataFor(sessionCode: string) {
    return store.get(sessionCode);
  }
}

type Dispatch<A> = (value: A) => void;
export function useLocalStoredUser<S>(
  sessionCode: string,
  initalState: S | (() => S)
): [S, Dispatch<S>] {
  const [storedValue, setStoredValue] = useState<S>(() => {
    return store.get(sessionCode);
  });

  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue: Dispatch<S> = (value: S) => {
    console.log(value);
    store.set(sessionCode, value);
    setStoredValue(value);
  };

  return [storedValue, setValue];
}

export default Storage;
