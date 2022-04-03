import React, { createContext, useContext, useReducer } from "react";

export const StoreContext = createContext({});

export const StoreProvider = ({ children }: any) => (
  <StoreContext.Provider value={useReducer(mainReducer, mainInitialState)}>
    {children}
  </StoreContext.Provider>
);

//creating useStore custom hook:
export const useStore = () => useContext(StoreContext);

//main reducer
export const mainReducer = (state: any, action: any) => {
  switch (action.type) {
    case "increment":
      return {
        correctAnswer: state.correctAnswer + 1,
      };
    case "clear":
      return {
        correctAnswer: 0,
      };

    default:
      return state;
  }
};

//initial state
const mainInitialState = {
  correctAnswer: 0,
};
