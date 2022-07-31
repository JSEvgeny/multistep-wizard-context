import { memoryQuestion } from "../definitions";
import { StepProps } from "../StepControl";

import useAnswers from "../hooks/useAnswers";

interface MemoryProps extends StepProps {}

const Memory = ({ next }: MemoryProps) => {
  const { key, question, options, optionToValueMap, toQAPair } = memoryQuestion;

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

export default Memory;
