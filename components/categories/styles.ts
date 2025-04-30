import {StyleSheet} from 'react-native';

import {horizontalScale, scaleFontSize} from '~/assets/styles/scaling';

export const styles = StyleSheet.create({
  categoryTabsContainer: {
    marginLeft: horizontalScale(24),
  },
  categoryItem: {
    marginRight: horizontalScale(10),
  },
  headerTitle: {
    marginBottom: scaleFontSize(16),
  },
});
