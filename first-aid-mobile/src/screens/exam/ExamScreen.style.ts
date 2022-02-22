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

  detailsSection: {
    flexBasis: '35%',
  },

  detailsView: {
    backgroundColor: color.gray100,
    flexGrow: 1,
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
    justifyContent: 'center',
  },

  progressBarFirstFiller: {
    width: 15,
    height: size.s,
    backgroundColor: color.primary,
    borderRadius: size.xxl,
    marginHorizontal: -size.xxs,
  },

  progressBarFiller: {
    width: 19.2,
    height: size.s,
    backgroundColor: color.primary,
    borderRadius: size.xxl,
    marginHorizontal: -size.xxs,
  },
});
