import { useCallback } from "react";
import { C2BActionTypes } from "../enums";
import { QA, UseAnswers } from "../types";
import useC2BContext from "./useC2BContext";

const useAnswers = (): UseAnswers => {
  const { state, dispatch } = useC2BContext();
  const { answers } = state;

  const setAnswer = useCallback((answer: QA) => {
    dispatch({
      type: C2BActionTypes.SET_ANSWER,
      value: answer,
    });
  }, []);

  return { answers, setAnswer };
};

export default useAnswers;
