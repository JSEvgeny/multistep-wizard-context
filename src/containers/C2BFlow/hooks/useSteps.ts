import { useCallback } from "react";
import { C2BActionTypes } from "../enums";
import { UseStep } from "../types";
import useC2BContext from "./useC2BContext";

const useSteps = (): UseStep => {
  const { state, dispatch } = useC2BContext();
  const { steps, currentStepIndex } = state;

  const _setStep = useCallback(
    (index: number) => {
      if (index < 0 || index === steps.length) {
        console.log("Step index out of range");

        return;
      }

      dispatch({
        type: C2BActionTypes.SET_CURRENT_STEP,
        value: index,
      });
    },
    [steps]
  );

  const next = useCallback(() => {
    _setStep(currentStepIndex + 1);
  }, [steps, currentStepIndex]);

  const previous = useCallback(() => {
    _setStep(currentStepIndex - 1);
  }, [steps, currentStepIndex]);

  const setSteps = useCallback((steps: string[]) => {
    dispatch({
      type: C2BActionTypes.SET_STEPS,
      value: steps,
    });
  }, []);

  return { steps, currentStepIndex, next, previous, setSteps };
};

export default useSteps;
