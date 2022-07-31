import { createContext, useReducer, useMemo, Reducer } from "react";
import { defaultSteps } from "../definitions";
import { C2BActionTypes } from "../enums";
import {
  Answers,
  C2BAction,
  C2BContext as C2BContextType,
  C2BContextProps,
  C2BState,
} from "../types";

export const C2BContext = createContext({} as C2BContextType);

const emptyState: C2BState = {
  steps: defaultSteps,
  currentStepIndex: 0,
  answers: {} as Answers,
};

const c2bReducer: Reducer<C2BState, C2BAction> = (
  state: C2BState,
  action: C2BAction
): C2BState => {
  switch (action.type) {
    case C2BActionTypes.SET_STEPS:
      const newSteps = action.value as string[];

      return { ...state, steps: newSteps, currentStepIndex: 0 };
    case C2BActionTypes.SET_CURRENT_STEP:
      const newCurrentStepIndex = action.value as number;

      return { ...state, currentStepIndex: newCurrentStepIndex };
    case C2BActionTypes.SET_ANSWER:
      const newAnswer = action.value as Answers;

      return {
        ...state,
        answers: { ...state.answers, ...newAnswer },
      };

    default:
      return state;
  }
};

const C2BContextProvider = ({
  children,
  initialState = emptyState,
}: C2BContextProps) => {
  const [state, dispatch] = useReducer(c2bReducer, initialState);
  const value = { state, dispatch };

  const cachedValue = useMemo(() => value, [state]);

  return (
    <C2BContext.Provider value={cachedValue}>{children}</C2BContext.Provider>
  );
};

export default C2BContextProvider;
