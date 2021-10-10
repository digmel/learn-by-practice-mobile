import {StyleSheet} from 'react-native';
import {size, color} from '@components';

export const styles = StyleSheet.create({
  container: {},

  sliderContainer: {
    flexBasis: '80%',
  },

  buttonContainer: {
    flexBasis: '20%',
  },

  svgContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexBasis: '80%',
  },
  textContainer: {
    flexBasis: '20%',
  },

  paginationContainer: {
    height: size.m,
    marginBottom: size.xl,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  pagination: {
    width: size.xs,
    height: size.xs,
    marginHorizontal: size.xxs,
    borderRadius: size.s,
    backgroundColor: color.gray200,
  },
  paginationActive: {
    backgroundColor: color.primary500,
    width: size.xl,
  },
});
