export type TListVariation = 'empty' | 'correct' | 'wrong';

export type TListProps = {
  children?: String;
  variation?: TListVariation;
  onPress?: Function;
};
