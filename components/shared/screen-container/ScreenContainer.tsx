import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  ViewStyle,
  ViewProps,
  StatusBarStyle,
  View,
} from 'react-native';

import {styles} from './styles';

interface ScreenContainerProps extends ViewProps {
  children: React.ReactNode;
  style?: ViewStyle | ViewStyle[];
  statusBarStyle?: StatusBarStyle;
}

export const ScreenContainer: React.FC<ScreenContainerProps> = ({
  children,
  style,
  statusBarStyle = 'dark-content',
  ...props
}) => {
  return (
    <SafeAreaView style={styles.mainContainer} {...props}>
      <StatusBar
        barStyle={statusBarStyle}
        backgroundColor="transparent"
        translucent
      />
      <View style={[styles.screenContainer, style]}>{children}</View>
    </SafeAreaView>
  );
};
