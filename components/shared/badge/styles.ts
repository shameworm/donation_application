import {StyleSheet} from 'react-native';

import {getFontFamily} from '~/assets/fonts/helper';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '~/assets/styles/scaling';

export const styles = StyleSheet.create({
  badgeContainer: {
    borderRadius: horizontalScale(999),
    backgroundColor: '#145855',
    paddingHorizontal: horizontalScale(10),
    paddingVertical: verticalScale(5),
  },
  badgeText: {
    color: '#fff',
    fontFamily: getFontFamily(600),
    fontSize: scaleFontSize(14),
  },
});
