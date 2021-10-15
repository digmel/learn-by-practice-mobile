import {StyleSheet} from 'react-native';
import {size, color} from '@components';

export const styles = StyleSheet.create({
  container: {
    height: 240,
    width: 200,
    marginRight: size.m,
    backgroundColor: color.accent100,
  },

  imageContainer: {
    backgroundColor: color.error100,
    flexBasis: '85%',
  },

  titleContainer: {
    flexBasis: '15%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
