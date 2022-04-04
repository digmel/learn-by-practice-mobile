import React, { FC, useEffect, useReducer } from "react";
import { ExamScreenView } from "./ExamScreen.view";
import { TExamScreenProps } from "./ExamScreen.type";
import { Questions } from "./questions";
import { ResultScreen } from "@screens";
import { useStore } from "@store";

type TExamScreenReducerActions = {
  type: "A" | "B" | "C" | "D" | "showNext" | "showPrevious";
};

const initialState = {
  index: 0,
  selectedAnswers: [],
  allAnswers: [],
  showDetails: false,
  isNextButtonDisabled: true,
  isPreviousButtonDisabled: true,
  isTestButtonDisabled: false,
  answerStatus: false,
  answerA: "Empty",
  answerB: "Empty",
  answerC: "Empty",
  answerD: "Empty",
};

const examScreenReducer = (state: any, action: TExamScreenReducerActions) => {
  let correctAnswer = Questions[state.index].answer;

  switch (action.type) {
    case "A": {
      return {
        ...state,
        showDetails: true,
        answerA: correctAnswer === "A" ? "Correct" : "Wrong",
        answerStatus: correctAnswer === "A",
        isNextButtonDisabled: !(correctAnswer === "A"),
        isTestButtonDisabled: correctAnswer === "A",
        selectedAnswers: [...state.selectedAnswers, "A"],
      };
    }
    case "B": {
      return {
        ...state,
        showDetails: true,
        answerB: correctAnswer === "B" ? "Correct" : "Wrong",
        answerStatus: correctAnswer === "B",
        isNextButtonDisabled: !(correctAnswer === "B"),
        isTestButtonDisabled: correctAnswer === "B",
        selectedAnswers: [...state.selectedAnswers, "B"],
      };
    }
    case "C": {
      return {
        ...state,
        showDetails: true,
        answerC: correctAnswer === "C" ? "Correct" : "Wrong",
        answerStatus: correctAnswer === "C",
        isNextButtonDisabled: !(correctAnswer === "C"),
        isTestButtonDisabled: correctAnswer === "C",
        selectedAnswers: [...state.selectedAnswers, "C"],
      };
    }
    case "D": {
      return {
        ...state,
        showDetails: true,
        answerD: correctAnswer === "D" ? "Correct" : "Wrong",
        answerStatus: correctAnswer === "D",
        isNextButtonDisabled: !(correctAnswer === "D"),
        isTestButtonDisabled: correctAnswer === "D",
        selectedAnswers: [...state.selectedAnswers, "D"],
      };
    }
    case "showNext": {
      return {
        ...state,
        showDetails: false,
        index: state.index + 1,
        answerA: "Empty",
        answerB: "Empty",
        answerC: "Empty",
        answerD: "Empty",
        isTestButtonDisabled: false,
        allAnswers: [...state.allAnswers, state.selectedAnswers],
        selectedAnswers: [],
        isPreviousButtonDisabled: false,
      };
    }
    case "showPrevious": {
      if (!!state.allAnswers[0]) {
        return {
          ...state,
          showDetails: true,
          index: state.index - 1,
          answerA:
            state.allAnswers[0][0] === Questions[state.index - 1].answer
              ? "Correct"
              : "Wrong",
          answerB:
            state.allAnswers[0][1] === Questions[state.index - 1].answer
              ? "Correct"
              : "Wrong",
          answerC:
            state.allAnswers[0][0] === Questions[state.index - 1].answer
              ? "Correct"
              : "Wrong",
          answerD:
            state.allAnswers[0][0] === Questions[state.index - 1].answer
              ? "Correct"
              : "Wrong",
          isTestButtonDisabled: true,
          selectedAnswers: [],
        };
      }
    }
    default:
      return state;
  }
};

export const ExamScreen: FC<TExamScreenProps> = ({ navigation }) => {
  const [state, dispatch] = useReducer(examScreenReducer, initialState);
  const { store, dispatch: storeDispatch } = useStore();

  console.log(state.selectedAnswers);
  console.log("ass", state.allAnswers[0]);
  console.log("re", Questions[state.index].answer);

  console.log(state.index);
  const examData = Questions[state.index];

  const _onPressA = () => {
    dispatch({ type: "A" });
  };
  const _onPressB = () => {
    dispatch({ type: "B" });
  };
  const _onPressC = () => {
    dispatch({ type: "C" });
  };
  const _onPressD = () => {
    dispatch({ type: "D" });
  };

  const _onPressNext = () => {
    dispatch({ type: "showNext" });
  };

  const _onPressPrevious = () => {
    if (state.index != 0 && state.allAnswers.length > 0) {
      dispatch({ type: "showPrevious" });
    }
  };

  if (state.index === 3) {
    navigation.navigate(ResultScreen);
  }
  useEffect(() => {});

  return (
    <ExamScreenView
      index={state.index}
      onPressNext={_onPressNext}
      onPressPrevious={_onPressPrevious}
      onPressA={_onPressA}
      onPressB={_onPressB}
      onPressC={_onPressC}
      onPressD={_onPressD}
      AnswerA={state.answerA}
      AnswerB={state.answerB}
      AnswerD={state.answerD}
      AnswerC={state.answerC}
      AnswerStatus={state.answerStatus}
      showDetails={state.showDetails}
      examData={examData}
      isNextButtonDisabled={state.isNextButtonDisabled}
      isPreviousButtonDisabled={state.isPreviousButtonDisabled}
      isTestButtonDisabled={state.isTestButtonDisabled}
    />
  );
};
