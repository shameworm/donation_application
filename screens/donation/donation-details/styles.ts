import {StyleSheet} from 'react-native';

import {getFontFamily} from '~/assets/fonts/helper';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '~/assets/styles/scaling';

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: horizontalScale(20),
    marginTop: verticalScale(7),
  },
  image: {
    marginTop: verticalScale(12),
    marginBottom: verticalScale(24),
    width: '100%',
    height: verticalScale(240),
    borderRadius: horizontalScale(5),
  },
  badge: {
    marginBottom: verticalScale(16),
    alignItems: 'flex-start',
  },
  description: {
    marginTop: verticalScale(7),
    marginHorizontal: horizontalScale(7),
    fontFamily: getFontFamily(400),
    fontSize: scaleFontSize(14),
    marginBottom: verticalScale(16),
  },
  button: {
    marginHorizontal: horizontalScale(20),
    height: horizontalScale(55),
  },
  buttonText: {
    fontFamily: getFontFamily(500),
    fontSize: scaleFontSize(16),
    color: '#fff',
  },
});
