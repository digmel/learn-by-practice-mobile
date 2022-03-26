import {AnaphylaxisSvg} from '@svg';
import React, {createContext, Reducer, useContext, useReducer} from 'react';

export const AppStateContext = createContext({});

export const AppStateProvider = ({reducer, initialState, children}) => (
  <AppStateContext.Provider
    value={useReducer<Reducer<any, any>>(reducer, initialState)}>
    {children}
  </AppStateContext.Provider>
);
export const useStateValue = () => useContext(AppStateContext);
