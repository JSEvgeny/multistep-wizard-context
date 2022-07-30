import {
  createContext,
  useReducer,
  useMemo,
  ReactElement,
  Reducer,
  Dispatch,
} from "react";

const questionKeys = ["model", "memory", "display", "hull", "battery"] as const;
const stepKeys = [
  "model",
  "memory",
  "display",
  "hull",
  // "battery",
  "summary",
  "contact form",
] as const;

export type Questions = typeof questionKeys[number];
export type Steps = typeof stepKeys[number];

type Answers = {
  [key in Questions]: string | number | boolean;
};

export enum C2BActionTypes {
  SET_STEPS,
  SET_CURRENT_STEP,
  SET_ANSWER,
}

interface C2BAction {
  type: C2BActionTypes;
  value: string | string[] | number | boolean | Answers;
}

interface C2BState {
  steps: readonly string[];
  currentStep: string;
  answers: Answers;
}

const emptyState: C2BState = {
  steps: stepKeys,
  currentStep: stepKeys[0],
  answers: {} as Answers,
};

interface C2BContextProps {
  children: ReactElement | ReactElement[];
  initialState: C2BState;
}

interface C2BContext {
  state: C2BState;
  dispatch: Dispatch<C2BAction>;
}

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
