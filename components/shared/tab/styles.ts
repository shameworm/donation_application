import {StyleSheet} from 'react-native';
import {getFontFamily} from '~/assets/fonts/helper';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '~/assets/styles/scaling';

export const styles = StyleSheet.create({
  activeTab: {
    borderRadius: horizontalScale(999),
    height: verticalScale(55),
    backgroundColor: '#2979F2',
    alignItems: 'center',
    paddingHorizontal: horizontalScale(16),
    paddingVertical: verticalScale(8),
    justifyContent: 'center',
  },
  incativeTab: {
    backgroundColor: '#F3F5F9',
  },
  title: {
    fontFamily: getFontFamily(500),
    fontSize: scaleFontSize(16),
    lineHeight: scaleFontSize(19),
    color: '#fff',
    textAlign: 'center',
  },
  inactiveTitle: {
    color: '#79869F',
  },
});
