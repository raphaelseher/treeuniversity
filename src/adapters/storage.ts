import { useState } from "react";
var store = require('store')

export interface IRegistrationData { 
    firstname: string,
    lastname: string
}

abstract class Storage {
    public static addTestData(): void { 
        console.log('Gorilla');
        store.set("1", { firstname: 'Raphael', lastname: 'Seher' });
        store.set("2", { firstname: 'Pavel' });
        store.set("3", { firstname: 'Phillipp' });
    }

    public static dataFor(sessionCode: string) { 
        return store.get(sessionCode);
    }
}

export function useLocalStoredUser(sessionCode: string) { 
  const [storedValue, setStoredValue] = useState(() => {
      return store.get(sessionCode);
  });

  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = (value: IRegistrationData) => {
      console.log(value);
      store.set(sessionCode, value);
      setStoredValue(value);
  };

  return [storedValue, setValue];
} 

export default Storage;
