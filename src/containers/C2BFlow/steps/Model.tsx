import { useCallback } from "react";
import { modelQuestion, questions } from "../definitions";
import useAnswers from "../hooks/useAnswers";
import { StepProps } from "../StepControl";
import { Question } from "../types";
import { createQuestion } from "../utils";

interface ModelProps extends StepProps {}

const Model = ({ stepKey, next }: ModelProps) => {
  // const modelQuestion = questions.find<Question<string>>(
  //   (question) => question.key === stepKey
  // );
  // if (!modelQuestion) return null;

  // const modelQuestion = createQuestion<string>({
  //   key: "model",
  //   question: "What model is your device?",
  //   options: ["iPhone XS", "iPhone 13 Pro Max"],
  //   optionToValueMap: new Map([
  //     ["iPhone XS", "iPhone XS"],
  //     ["iPhone 13 Pro Max", "iPhone 13 Pro Max"],
  //   ]),
  // });

  const { key, question, options, optionToValueMap, toQAPair } = modelQuestion;

  const { setAnswer } = useAnswers();

  const onOptionSelect = (option: string) => {
    const typedValue = optionToValueMap.get(option) ?? undefined;

    if (!typedValue) return;

    setAnswer(toQAPair(typedValue));
    next();
  };

  return (
    <>
      <h1>{question}</h1>

      <>
        {options.map((option, index) => (
          <label key={`${key}_option_${index}`}>
            <input
              type="radio"
              name={key}
              onChange={() => onOptionSelect(option)}
            />

            {option}
          </label>
        ))}
      </>

      <button onClick={next}>Next</button>
    </>
  );
};

export default Model;
