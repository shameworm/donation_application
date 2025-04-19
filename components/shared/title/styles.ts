import {StyleSheet} from 'react-native';
import {getFontFamily} from '~/assets/fonts/helper';
import {scaleFontSize, verticalScale} from '~/assets/styles/scaling';

export const styles = StyleSheet.create({
  screen: {
    marginBottom: verticalScale(24),
    fontSize: scaleFontSize(24),
    fontFamily: getFontFamily(600),
  },
  card: {
    fontSize: scaleFontSize(20),
    fontFamily: getFontFamily(600),
  },
  default: {
    fontSize: scaleFontSize(16),
    fontFamily: getFontFamily(400),
  },
});
