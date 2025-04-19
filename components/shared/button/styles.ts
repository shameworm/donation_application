import {StyleSheet} from 'react-native';
import {getFontFamily} from '~/assets/fonts/helper';
import {horizontalScale, verticalScale} from '~/assets/styles/scaling';

export const styles = StyleSheet.create({
  primary: {
    borderRadius: horizontalScale(999),
    backgroundColor: '#2979F2',
    alignItems: 'center',
    paddingHorizontal: horizontalScale(16),
    paddingVertical: verticalScale(8),
    justifyContent: 'center',
  },
  secondary: {
    borderRadius: horizontalScale(999),
    backgroundColor: '#F3F5F9',
    paddingHorizontal: horizontalScale(16),
    paddingVertical: verticalScale(8),
    alignItems: 'center',
    justifyContent: 'center',
  },
  link: {
    backgroundColor: 'transparent',
    paddingHorizontal: horizontalScale(16),
    paddingVertical: verticalScale(8),
    alignItems: 'center',
    justifyContent: 'center',
  },

  textPrimary: {
    color: '#FFFFFF',
    fontFamily: getFontFamily(600),
    fontSize: 16,
  },
  textSecondary: {
    color: '#79869F',
    fontFamily: getFontFamily(600),
    fontSize: 16,
  },
  textLink: {
    color: '#2979F2',
    fontFamily: getFontFamily(600),
    fontSize: 16,
  },
});
