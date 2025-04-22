import React from 'react';
import {Pressable, Text} from 'react-native';

import {styles} from './styles';

type TabProps = {
  onPress: () => void;
  title: string;
  isInactive?: boolean;
};

export function Tab({
  onPress,
  title,
  isInactive = false,
}: TabProps): React.JSX.Element {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [
        {opacity: pressed ? 0.5 : 1},
        styles.activeTab,
        isInactive && styles.incativeTab,
      ]}>
      <Text style={[styles.title, isInactive && styles.inactiveTitle]}>
        {title}
      </Text>
    </Pressable>
  );
}
