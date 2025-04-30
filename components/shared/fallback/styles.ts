import {StyleSheet} from 'react-native';

import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '~/assets/styles/scaling';

export const styles = StyleSheet.create({
  fallbackContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: horizontalScale(24),
  },
  fallbackImage: {
    marginBottom: verticalScale(20),
  },
  fallbackTitle: {
    marginBottom: verticalScale(8),
  },
  fallbackSubtitle: {
    fontSize: scaleFontSize(14),
    color: '#666',
    textAlign: 'center',
  },
});
