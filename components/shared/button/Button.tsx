import React from 'react';

import {Pressable} from 'react-native';

import {getVariantStyles} from './utils';
import {styles} from './styles';

type ButtonProps = {
  onPress: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'link' | 'custom';
  styles?: object;
  textStyles?: object;
  isDisabled?: boolean;
};

export function Button({
  onPress,
  variant = 'primary',
  styles: customStyles = {},
  children,
  isDisabled = false,
}: ButtonProps): React.JSX.Element {
  return (
    <Pressable
      disabled={isDisabled}
      onPress={onPress}
      style={({pressed}) => [
        {opacity: pressed ? 0.5 : 1},
        ...[].concat(getVariantStyles(variant, customStyles) as any),
        isDisabled && styles.disabled,
      ]}>
      {children}
    </Pressable>
  );
}
