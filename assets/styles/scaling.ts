import {Dimensions} from 'react-native';
import DeviceInfo from 'react-native-device-info';

const {width, height} = Dimensions.get('window');

const isSmall = width <= 375 && !DeviceInfo.hasNotch();

const DEVICE_SIZES = {
  small: {
    baseWidth: 330,
    baseHeight: 550,
    baseFontSize: 400,
  },
  medium: {
    baseWidth: 350,
    baseHeight: 680,
    baseFontSize: 400,
  },
  large: {
    baseWidth: 350,
    baseHeight: 620,
    baseFontSize: 430,
  },
};

function getDeviceCategory() {
  if (isSmall) {
    return 'small';
  }
  if (width > 410) {
    return 'large';
  }
  return 'medium';
}

const deviceCategory = getDeviceCategory();
const {baseWidth, baseHeight, baseFontSize} = DEVICE_SIZES[deviceCategory];

export const horizontalScale = (size: number): number =>
  (width / baseWidth) * size;

export const verticalScale = (size: number): number =>
  (height / baseHeight) * size;

export const scaleFontSize = (size: number): number =>
  Math.round((width / baseFontSize) * size);
