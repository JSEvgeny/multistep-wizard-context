import { useCallback } from "react";
import { C2BActionTypes } from "../context/c2b.context";
import useC2BContext from "./useC2BContext";

interface UseStep {
  steps: readonly string[];
  currentStep: string;
  next: () => void;
  previous: () => void;
  setSteps: (steps: string[]) => void;
}

const useSteps = (): UseStep => {
  const { state, dispatch } = useC2BContext();
  const { steps, currentStep } = state;

  const _setStep = useCallback(
    (index: number) => {
      if (index < 0 || index === steps.length) {
        console.log("Step index out of range");

        return;
      }

      dispatch({
        type: C2BActionTypes.SET_CURRENT_STEP,
        value: steps[index],
      });
    },
    [steps]
  );

  const next = useCallback(() => {
    const currentStepIndex = steps.indexOf(currentStep);

    _setStep(currentStepIndex + 1);
  }, [steps, currentStep]);

  const previous = useCallback(() => {
    const currentStepIndex = steps.indexOf(currentStep);

    _setStep(currentStepIndex - 1);
  }, [steps, currentStep]);

  const setSteps = useCallback((steps: string[]) => {
    dispatch({
      type: C2BActionTypes.SET_STEPS,
      value: steps,
    });
  }, []);

  return { steps, currentStep, next, previous, setSteps };
};

export default useSteps;
