import {styles as mainStyles} from './styles';

type Variant = 'primary' | 'secondary' | 'link' | 'custom';

export const getVariantStyles = (
  variant: Variant,
  customStyles: object,
): object | object[] => {
  if (variant === 'custom') {
    return customStyles;
  }
  return [mainStyles[variant], customStyles];
};
