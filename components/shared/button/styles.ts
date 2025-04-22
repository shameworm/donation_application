import {StyleSheet} from 'react-native';

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
  link: {
    backgroundColor: 'transparent',
    paddingHorizontal: horizontalScale(16),
    paddingVertical: verticalScale(8),
    alignItems: 'center',
    justifyContent: 'center',
  },
  disabled: {
    opacity: 0.5,
  },
});
