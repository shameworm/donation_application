import {Platform, StatusBar, StyleSheet} from 'react-native';

import {horizontalScale} from '~/assets/styles/scaling';

export const styles = StyleSheet.create({
  mainContainer: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: '#fff',
    flex: 1,
  },
  screenContainer: {
    marginHorizontal: horizontalScale(16),
    flex: 1,
  },
});
