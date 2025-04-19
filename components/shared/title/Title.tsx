import React from 'react';
import {Text, TextProps} from 'react-native';

import {styles} from './styles';

type TitleType = 'screen' | 'card' | 'default';

type TitleProps = TextProps & {
  type?: TitleType;
  children: React.ReactNode;
};

export function Title({
  type = 'default',
  children,
  style,
  ...props
}: TitleProps): React.JSX.Element {
  const textStyle = styles[type];

  return (
    <Text style={[textStyle, style]} {...props}>
      {children}
    </Text>
  );
}
