import {Pressable} from 'react-native';

import {getVariantStyles} from './utils';

type ButtonProps = {
  onPress: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'link' | 'custom';
  styles?: object;
  textStyles?: object;
};

export function Button({
  onPress,
  variant = 'primary',
  styles: customStyles = {},
  children,
}: ButtonProps): React.JSX.Element {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [
        {opacity: pressed ? 0.5 : 1},
        ...[].concat(getVariantStyles(variant, customStyles) as any),
      ]}>
      {children}
    </Pressable>
  );
}
