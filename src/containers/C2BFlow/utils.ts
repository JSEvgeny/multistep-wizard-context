import { Question } from "./types";

export const createQuestion = <T>({
  key,
  question,
  options,
  optionToValueMap,
  value,
}: Omit<Question<T>, "toQAPair" | "toQAString">): Readonly<Question<T>> =>
  Object.freeze({
    key,
    question,
    options,
    optionToValueMap,
    value,
    toQAPair: (value: T) => ({ [key]: value }),
    toQAString: (option: string) => `${question}: ${option}`,
  });
