import {
  TResultCounterActions,
  TResultCounterStore,
} from "./ResultCounter.type";

export const resultCounterReducer = (
  store: TResultCounterStore,
  action: TResultCounterActions
) => {
  let correctAnswer = 0;

  switch (action.type) {
    case "incrementResult":
      return {
        correctAnswer: correctAnswer + 1,
      };
    case "clearResult":
      return {
        correctAnswer: 0,
      };

    default:
      return store;
  }
};

export const resultCounterInitialState = {
  correctAnswer: 0,
};
