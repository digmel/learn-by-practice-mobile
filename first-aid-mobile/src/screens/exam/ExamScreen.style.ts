import {StyleSheet} from 'react-native';
import {color, size} from '@components';

export const styles = StyleSheet.create({
  container: {},

  content: {
    justifyContent: 'space-between',
  },

  testView: {
    flexBasis: '35%',
  },

  answerView: {
    flexBasis: '35%',
    backgroundColor: color.gray100,
  },
  headline: {
    marginHorizontal: size.xl,
    marginTop: size.l,
    paddingBottom: size.m,
    marginBottom: size.m,
    borderBottomColor: color.dark,
    borderBottomWidth: 1,
  },

  details: {
    marginHorizontal: size.xl,
  },

  navigation: {
    flexBasis: '15%',
    flexDirection: 'row',
    alignItems: 'flex-start',
  },

  buttonContainer: {
    flexBasis: '50%',
    paddingHorizontal: size.s,
  },

  progressBar: {
    width: 150,
    height: size.s,
    borderColor: color.primary,
    borderRadius: size.xxl,
    borderWidth: 1,
  },
});
