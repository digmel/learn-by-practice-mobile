import React, {FC, useState} from 'react';
import {ExamScreenView} from './ExamScreen.view';
import {TExamScreenViewProps} from './ExamScreen.type';
import {View} from 'react-native';
import {color, size} from '@components';

export const ExamScreen: FC<TExamScreenViewProps> = () => {
  let [progress, setProgress] = useState([
    <View
      style={{
        width: 15,
        height: size.s,
        backgroundColor: color.primary,
        borderRadius: size.xxl,
        marginRight: -size.xxs,
      }}
    />,
  ]);

  const _onPressNext = () => {
    setProgress(progress => [
      ...progress,
      <View
        style={{
          width: 19.2,
          height: size.s,
          backgroundColor: color.primary,
          borderRadius: size.xxl,
          marginHorizontal: -size.xxs,
        }}
      />,
    ]);
  };
  return <ExamScreenView onPressNext={_onPressNext} progressBar={progress} />;
};
