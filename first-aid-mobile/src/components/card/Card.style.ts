import {StyleSheet} from 'react-native';
import {size, color} from '@components';

export const styles = StyleSheet.create({
  container: {
    height: 240,
    width: 200,
    marginRight: size.m,
    borderColor: color.secondary,
    borderWidth: 1,
    borderRadius: size.l,
    marginBottom: size.l,
  },

  imageContainer: {
    flexBasis: '85%',
  },

  titleContainer: {
    flexBasis: '15%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
