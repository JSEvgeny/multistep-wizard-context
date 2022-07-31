import { createQuestion } from "./utils";

// Question definitions
const modelQuestion = createQuestion<string>({
  key: "model",
  question: "What is your device model?",
  options: [],
});

const memoryQuestion = createQuestion<number>({
  key: "memory",
  question: "What is your device memory capacity?",
  options: [],
});

const displayQuestion = createQuestion<string>({
  key: "display",
  question: "What is your device memory capacity?",
  options: [],
});

const hullQuestion = createQuestion<boolean>({
  key: "hull",
  question: "Is hull bent?",
  options: [],
});

const batteryQuestion = createQuestion<boolean>({
  key: "battery",
  question: "Is battery capacity at least 85%?",
  options: [],
});

export const questions = [
  modelQuestion,
  memoryQuestion,
  displayQuestion,
  hullQuestion,
  batteryQuestion,
];

// Step definitions
export const preQuestionStepKeys: string[] = [];
export const postQuestionStepKeys: string[] = ["summary", "contact form"];

// "model", "memory", "display", "hull", "battery", "summary", "contact form"
export const defaultSteps = [
  ...preQuestionStepKeys,
  ...questions.map((question) => question.key),
  ...postQuestionStepKeys,
];

// AB test questions and steps definitions
const variantQuestions = [
  ...questions,
  createQuestion<boolean>({
    key: "camera",
    question: "Is camera broken",
    options: [],
  }),
];

export const variantSteps = [
  ...preQuestionStepKeys,
  ...variantQuestions.map((question) => question.key),
  ...postQuestionStepKeys,
];
