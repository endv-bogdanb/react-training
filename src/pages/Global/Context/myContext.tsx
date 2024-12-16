import {
  type FC,
  type ReactNode,
  createContext,
  useContext,
  useMemo,
  useReducer,
} from "react";

export interface MyContextState {
  toggle: boolean;
}

export interface MyContextMethods {
  on: () => void;
  off: () => void;
  toggle: () => void;
  set: (value: boolean) => void;
}

type Actions =
  | { type: "ON" }
  | { type: "OFF" }
  | { type: "TOGGLE" }
  | { type: "SET"; payload: boolean };

export type MyContext = MyContextState & MyContextMethods;

const MyContextState = createContext<MyContextState | null>(null);
const MyContextMethods = createContext<MyContextMethods | null>(null);

export const useMyContextState = () => {
  const ctx = useContext(MyContextState);

  if (ctx == null) {
    throw new Error("useMyContextState can be used only inside <MyContext>");
  }

  return ctx;
};

export const useMyContextMethods = () => {
  const ctx = useContext(MyContextMethods);

  if (ctx == null) {
    throw new Error("useMyContextMethods can be used only inside <MyContext>");
  }

  return ctx;
};

export const useMyContext = () => {
  const state = useContext(MyContextState);
  const actions = useContext(MyContextMethods);

  if (state == null || actions == null) {
    throw new Error("useMyContext can be used only inside <MyContext>");
  }

  return useMemo(() => ({ state, actions }), [state, actions]);
};

export const MyContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(
    (state: MyContextState, action: Actions) => {
      switch (action.type) {
        case "ON": {
          return { ...state, toggle: true };
        }
        case "OFF": {
          return { ...state, toggle: false };
        }
        case "TOGGLE": {
          return { ...state, toggle: !state.toggle };
        }
        case "SET": {
          return { ...state, toggle: action.payload };
        }
        default: {
          (function assertUnreachable(_: never) {})(action);
        }
      }
      return state;
    },
    { toggle: false },
  );

  const actions = useMemo<MyContextMethods>(
    () => ({
      on: () => dispatch({ type: "ON" }),
      off: () => dispatch({ type: "OFF" }),
      toggle: () => dispatch({ type: "TOGGLE" }),
      set: (value: boolean) => dispatch({ type: "SET", payload: value }),
    }),
    [],
  );

  return (
    <MyContextMethods.Provider value={actions}>
      <MyContextState.Provider value={state}>
        {children}
      </MyContextState.Provider>
    </MyContextMethods.Provider>
  );
};
