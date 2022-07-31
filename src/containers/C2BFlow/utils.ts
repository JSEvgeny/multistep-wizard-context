import { Question } from "./types";

export const createQuestion = <T>({
  key,
  question,
  options,
  value,
}: Omit<Question<T>, "toQAPair" | "toQAString">) => ({
  key,
  question,
  options,
  value,
  toQAPair: () => ({ [key]: value }),
  toQAString: () => `${question}: ${value}`,
});
