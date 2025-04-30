import {StyleSheet} from 'react-native';

import {verticalScale} from '~/assets/styles/scaling';

export const styles = StyleSheet.create({
  donationItemsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginTop: verticalScale(16),
  },
  singleDonationItem: {
    maxWidth: '49%',
    marginBottom: verticalScale(24),
  },
});
