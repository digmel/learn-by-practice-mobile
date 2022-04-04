import { TResultCounterProps } from "./ResultCounter.type";

export const resultCounterReducer = (store: any, action: any) => {
  switch (action.type) {
    case "increment":
      return {
        correctAnswer: store.correctAnswer + 1,
      };
    case "clear":
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
