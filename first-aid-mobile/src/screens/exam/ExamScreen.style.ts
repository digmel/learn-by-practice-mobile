import {StyleSheet} from 'react-native';
import {color, size} from '@components';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: color.primary500,
  },

  questionContainer: {
    backgroundColor: 'red',
    marginBottom: 50,
  },

  answerContainer: {
    backgroundColor: 'green',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
});
