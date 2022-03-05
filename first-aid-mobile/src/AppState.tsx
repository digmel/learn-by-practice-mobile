import React, {createContext, useState, useMemo, Children} from 'react';

export const AppStateContext = createContext();

export const AppStateProvider = (props: any) => {
  const [correctAnswers, setCorrectAnswer] = useState(0);

  const contextValue = 'success';
  return (
    <AppStateContext.Provider value={contextValue}>
      {props.children}
    </AppStateContext.Provider>
  );
};
