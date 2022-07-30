import { useEffect, ReactElement } from "react";
import useSteps from "./hooks/useSteps";
import Battery from "./steps/Battery";
import ContactForm from "./steps/ContactForm";
import Display from "./steps/Display";
import Hull from "./steps/Hull";
import Memory from "./steps/Memory";
import Model from "./steps/Model";
import Summary from "./steps/Summary";

// "model", "memory", "display", "hull", "battery", "summary", "contact form"
const stepMap = new Map<string, (props: any) => ReactElement>([
  ["model", (props) => <Model {...props} />],
  ["memory", (props) => <Memory {...props} />],
  ["display", (props) => <Display {...props} />],
  ["hull", (props) => <Hull {...props} />],
  ["battery", (props) => <Battery {...props} />],
  ["summary", (props) => <Summary {...props} />],
  ["contact form", (props) => <ContactForm {...props} />],
]);

const StepControl = () => {
  const { steps, currentStep, next, previous, setSteps } = useSteps();

  const showBatteryQuestion = false;

  useEffect(() => {
    if (showBatteryQuestion) {
      setSteps([
        "model",
        "memory",
        "display",
        "hull",
        "battery",
        "summary",
        "contact form",
      ]);
    }
  }, []);

  const renderStep = stepMap.get(currentStep) ?? null;
  return (
    <>
      <button onClick={previous}>Previous</button>
      {renderStep && renderStep({ next })}
    </>
  );
};

export default StepControl;
