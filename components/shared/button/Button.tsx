import {Pressable, Text} from 'react-native';
import {getVariantStyles, getTextStyle} from './utils';

type ButtonProps = {
  onPress: () => void;
  title: string;
  variant?: 'primary' | 'secondary' | 'link' | 'custom';
  styles?: object;
  textStyles?: object;
};

export function Button({
  title,
  onPress,
  variant = 'primary',
  styles: customStyles = {},
  textStyles = {},
}: ButtonProps): React.JSX.Element {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [
        {opacity: pressed ? 0.5 : 1},
        ...[].concat(getVariantStyles(variant, customStyles) as any),
      ]}>
      <Text style={getTextStyle(variant, textStyles)}>{title}</Text>
    </Pressable>
  );
}
