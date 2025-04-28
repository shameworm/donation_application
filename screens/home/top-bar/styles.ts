import {StyleSheet} from 'react-native';
import {getFontFamily} from '~/assets/fonts/helper';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '~/assets/styles/scaling';

export const styles = StyleSheet.create({
  topBarContainer: {
    marginTop: verticalScale(20),
    marginHorizontal: horizontalScale(14),
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  introText: {
    marginBottom: verticalScale(5),
    fontFamily: getFontFamily(400),
    fontSize: scaleFontSize(16),
    lineHeight: scaleFontSize(19),
    color: '#636776',
  },
  higlightImage: {
    width: '100%',
    height: verticalScale(160),
  },
});
