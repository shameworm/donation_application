import React from 'react';
import {Pressable, Text} from 'react-native';

import {styles} from './styles';

type TabProps = {
  tabId: number;
  title: string;
  isInactive?: boolean;
  onPress: (value: any) => void;
};

export function Tab({
  tabId,
  title,
  isInactive = false,
  onPress,
}: TabProps): React.JSX.Element {
  return (
    <Pressable
      onPress={() => onPress(tabId)}
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
