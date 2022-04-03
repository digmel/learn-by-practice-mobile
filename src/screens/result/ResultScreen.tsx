import { DashboardScreen, ExamScreen } from "@screens";
import { useStore } from "@store";
import React, { FC } from "react";
import { TResultScreenProps } from "./ResultScreen.type";
import { ResultScreenView } from "./ResultScreen.view";

export const ResultScreen: FC<TResultScreenProps> = ({ navigation }) => {
  const [{ correctAnswer }, dispatch] = useStore();

  const _onPressGoHome = () => {
    dispatch({ type: "clear" });
    navigation.navigate(DashboardScreen);
  };

  const _onPressTryAgain = () => {
    dispatch({ type: "clear" });
    navigation.navigate(ExamScreen);
  };
  return (
    <ResultScreenView
      onPressGoHome={_onPressGoHome}
      onPressTryAgain={_onPressTryAgain}
      correctAnswersValue={correctAnswer}
    />
  );
};
