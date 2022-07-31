import { Dispatch, ReactElement } from "react";
import {
  C2BActionTypes,
  defaultQuestionKeys,
  defaultStepKeys,
} from "./constants";

// C2B context types
export type Questions = typeof defaultQuestionKeys[number];
export type Steps = typeof defaultStepKeys[number];

export type Answers = {
  [key in Questions]: string | number | boolean;
};

export interface C2BAction {
  type: C2BActionTypes;
  value: string | string[] | number | boolean | Answers;
}

export interface C2BState {
  steps: readonly string[];
  currentStep: string;
  answers: Answers;
}

export interface C2BContextProps {
  children: ReactElement | ReactElement[];
  initialState: C2BState;
}

export interface C2BContext {
  state: C2BState;
  dispatch: Dispatch<C2BAction>;
}

// useSteps hook types
export interface UseStep {
  steps: readonly string[];
  currentStep: string;
  next: () => void;
  previous: () => void;
  setSteps: (steps: string[]) => void;
}
