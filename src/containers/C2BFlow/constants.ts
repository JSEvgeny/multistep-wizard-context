import { Answers, C2BState } from "./types";

// Constants
export const defaultQuestionKeys = [
  "model",
  "memory",
  "display",
  "hull",
  "battery",
] as const;

export const defaultStepKeys = [
  "model",
  "memory",
  "display",
  "hull",
  // "battery",
  "summary",
  "contact form",
] as const;

export const emptyState: C2BState = {
  steps: defaultStepKeys,
  currentStep: defaultStepKeys[0],
  answers: {} as Answers,
};

// Enums
export enum C2BActionTypes {
  SET_STEPS,
  SET_CURRENT_STEP,
  SET_ANSWER,
}
