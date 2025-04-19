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

export const getTextStyle = (
  variant: Variant,
  customTextStyles?: object,
): object => {
  if (variant === 'custom') {
    return customTextStyles || {};
  }

  switch (variant) {
    case 'secondary':
      return mainStyles.textSecondary;
    case 'link':
      return mainStyles.textLink;
    case 'primary':
    default:
      return mainStyles.textPrimary;
  }
};
