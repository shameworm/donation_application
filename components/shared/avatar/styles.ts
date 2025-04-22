import {StyleSheet} from 'react-native';

import {horizontalScale} from '~/assets/styles/scaling';

export const styles = StyleSheet.create({
  userProfileImageContainer: {
    padding: horizontalScale(4),
  },
  userProfileImage: {
    width: horizontalScale(50),
    height: horizontalScale(50),
  },
});
