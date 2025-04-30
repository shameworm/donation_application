import {StyleSheet} from 'react-native';
import {getFontFamily} from '~/assets/fonts/helper';
import {horizontalScale, verticalScale} from '~/assets/styles/scaling';

export const styles = StyleSheet.create({
  image: {
    width: horizontalScale(140),
    height: verticalScale(177),
    borderRadius: horizontalScale(20),
  },
  badge: {
    position: 'absolute',
    zIndex: 1,
    top: verticalScale(13),
    left: horizontalScale(10),
  },
  donationInfo: {
    marginTop: verticalScale(16),
  },
  price: {
    marginTop: verticalScale(5),
    color: '#156CF7',
    fontFamily: getFontFamily(700),
  },
});
