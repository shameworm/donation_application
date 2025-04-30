import {StyleSheet} from 'react-native';

import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '~/assets/styles/scaling';

export const styles = StyleSheet.create({
  donationItemsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginTop: verticalScale(16),
  },
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
  singleDonationItem: {
    maxWidth: '49%',
    marginBottom: verticalScale(24),
  },
});
