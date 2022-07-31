import {
  createContext,
  useReducer,
  useMemo,
  ReactElement,
  Reducer,
  Dispatch,
} from "react";
import {
  C2BActionTypes,
  defaultQuestionKeys,
  defaultStepKeys,
  emptyState,
} from "../constants";
import {
  Answers,
  C2BAction,
  C2BContextProps,
  C2BState,
  Steps,
  C2BContext,
} from "../types";

export const C2BContext = createContext({} as C2BContext);

const c2bReducer: Reducer<C2BState, C2BAction> = (
  state: C2BState,
  action: C2BAction
): C2BState => {
  switch (action.type) {
    case C2BActionTypes.SET_STEPS:
      const newSteps = action.value as string[];

      return { ...state, steps: newSteps, currentStep: newSteps[0] };
    case C2BActionTypes.SET_CURRENT_STEP:
      return { ...state, currentStep: action.value as Steps };
    case C2BActionTypes.SET_ANSWER:
      return {
        ...state,
        answers: { ...state.answers, ...(action.value as Answers) },
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
