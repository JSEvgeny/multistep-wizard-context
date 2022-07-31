import { createQuestion } from "./utils";

// Question definitions
export const modelQuestion = createQuestion<string>({
  key: "model",
  question: "What model is your device?",
  options: ["iPhone XS", "iPhone 13 Pro Max"],
  optionToValueMap: new Map([
    ["iPhone XS", "iPhone XS"],
    ["iPhone 13 Pro Max", "iPhone 13 Pro Max"],
  ]),
});

export const memoryQuestion = createQuestion<number>({
  key: "memory",
  question: "What is your device memory capacity?",
  options: ["128", "256", "512"],
  optionToValueMap: new Map([
    ["128", 128],
    ["256", 256],
    ["512", 512],
  ]),
});

const displayQuestion = createQuestion<boolean>({
  key: "display",
  question: "Is display broken?",
  options: ["Yes", "No"],
  optionToValueMap: new Map([
    ["Yes", true],
    ["No", false],
  ]),
});

const hullQuestion = createQuestion<boolean>({
  key: "hull",
  question: "Is hull bent?",
  options: ["Yes", "No"],
  optionToValueMap: new Map([
    ["Yes", true],
    ["No", false],
  ]),
});

const batteryQuestion = createQuestion<boolean>({
  key: "battery",
  question: "Is battery capacity at least 85%?",
  options: ["Yes", "No"],
  optionToValueMap: new Map([
    ["Yes", true],
    ["No", false],
  ]),
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
    options: ["Yes", "No"],
    optionToValueMap: new Map([
      ["Yes", true],
      ["No", false],
    ]),
  }),
];

export const variantSteps = [
  ...preQuestionStepKeys,
  ...variantQuestions.map((question) => question.key),
  ...postQuestionStepKeys,
];
