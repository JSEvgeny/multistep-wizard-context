import { useEffect, ReactElement } from "react";
import { variantSteps } from "./definitions";
import useSteps from "./hooks/useSteps";
import Battery from "./steps/Battery";
import Camera from "./steps/Camera";
import ContactForm from "./steps/ContactForm";
import Display from "./steps/Display";
import Hull from "./steps/Hull";
import Memory from "./steps/Memory";
import Model from "./steps/Model";
import Summary from "./steps/Summary";

export interface StepProps {
  stepKey: string;
  next: () => void;
}

// "model", "memory", "display", "hull", "battery", "summary", "contact form"
const stepMap = new Map<string, (props: StepProps) => ReactElement>([
  ["model", (props) => <Model {...props} />],
  ["memory", (props) => <Memory {...props} />],
  ["display", (props) => <Display {...props} />],
  ["hull", (props) => <Hull {...props} />],
  ["battery", (props) => <Battery {...props} />],
  ["camera", (props) => <Camera {...props} />],
  ["summary", (props) => <Summary {...props} />],
  ["contact form", (props) => <ContactForm {...props} />],
]);

const StepControl = () => {
  const { steps, currentStepIndex, next, previous, setSteps } = useSteps();

  const showCameraQuestion = true;

  useEffect(() => {
    if (showCameraQuestion) {
      setSteps(variantSteps);
    }
  }, []);

  const currentStepKey = steps[currentStepIndex];

  const renderStep = stepMap.get(currentStepKey) ?? null;

  return (
    <>
      <button onClick={previous}>Previous</button>
      {renderStep ? (
        renderStep({ stepKey: currentStepKey, next })
      ) : (
        <span>
          StepMap entry is missing for stepKey: {currentStepKey} at
          StepControl.ts:14
        </span>
      )}
    </>
  );
};

export default StepControl;
