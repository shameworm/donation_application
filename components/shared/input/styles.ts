import {StyleSheet} from 'react-native';
import {getFontFamily} from '~/assets/fonts/helper';

import {horizontalScale, scaleFontSize} from '~/assets/styles/scaling';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: horizontalScale(15),
    paddingHorizontal: horizontalScale(16),
    backgroundColor: '#F3F5F9',
  },
  icon: {
    marginRight: horizontalScale(10),
  },
  input: {
    flex: 1,
    fontFamily: getFontFamily(400),
    fontSize: scaleFontSize(16),
    height: '100%',
    color: '#686C7A',
  },
});
