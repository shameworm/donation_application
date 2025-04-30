import {StyleSheet} from 'react-native';

import {horizontalScale, scaleFontSize} from '~/assets/styles/scaling';

export const styles = StyleSheet.create({
  categoryItem: {
    marginRight: horizontalScale(10),
  },
  headerTitle: {
    marginBottom: scaleFontSize(16),
  },
});
