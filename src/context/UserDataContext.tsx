import React, { Dispatch } from "react";
import { State, Action } from "reducer/userDataReducer";
// import { StateType, Action } from "./reducer";

interface IUserDataContextProps {
  state: State;
  dispatch: Dispatch<Action>;
}

const UserDataContext = React.createContext({} as IUserDataContextProps);

export function useUserDataContext() {
  return React.useContext(UserDataContext);
}

export default UserDataContext;
