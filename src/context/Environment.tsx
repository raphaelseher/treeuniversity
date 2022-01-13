import React, { useState, Dispatch, SetStateAction } from "react";

export interface IEnvironment {
  registrationCode?: string;
}

const defaultEnvironment: IEnvironment = {
  registrationCode: undefined,
};

export const EnvironmentContext = React.createContext<
  [IEnvironment, Dispatch<SetStateAction<IEnvironment>>]
>([defaultEnvironment, () => {}]);

const EnvironmentProvider: React.FC = ({ children }) => {
  const environmentState = useState<IEnvironment>(defaultEnvironment);

  return (
    <EnvironmentContext.Provider value={environmentState}>
      {children}
    </EnvironmentContext.Provider>
  );
};

export const EnvironmentConsumer = EnvironmentContext.Consumer;

export default EnvironmentProvider;
