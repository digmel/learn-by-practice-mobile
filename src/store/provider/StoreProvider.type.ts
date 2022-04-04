import { ReactNode } from "react";

export type TStoreProvider = {
  children: ReactNode;
};

export type TMainState = {
  resultCounter: any;
};

export type TMainDispatch = { type: any };
