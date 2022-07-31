import { Dispatch, ReactElement } from "react";
import { C2BActionTypes } from "./enums";

// C2B context types
export type Answers = QA<AnswerType>;
export interface C2BAction {
  type: C2BActionTypes;
  value: string | string[] | number | boolean | Answers;
}

export interface C2BState {
  steps: readonly string[];
  currentStepIndex: number;
  answers: Answers;
}

export interface C2BContextProps {
  children: ReactElement | ReactElement[];
  initialState?: C2BState;
}

export interface C2BContext {
  state: C2BState;
  dispatch: Dispatch<C2BAction>;
}

export type QA<T = AnswerType> = Record<string, T>;

export interface Question<T = AnswerType> {
  guidance?: string[];
  value?: T;
  key: string;
  question: string;
  options: string[];
  optionToValueMap: Map<string, T>;
  toQAPair: (value: T) => QA<T>;
  toQAString: (value: T) => string;
}

// Extend if required when adding new question definition
export type AnswerType = string | boolean | number;

// useSteps hook types
export interface UseStep {
  steps: readonly string[];
  currentStepIndex: number;
  next: () => void;
  previous: () => void;
  setSteps: (steps: string[]) => void;
}

// useAnswers hook types
export interface UseAnswers {
  answers: Answers;
  setAnswer: (answer: QA<AnswerType>) => void;
}
