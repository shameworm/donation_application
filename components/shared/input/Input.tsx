import React from 'react';
import {View, TextInput, KeyboardTypeOptions} from 'react-native';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {IconDefinition} from '@fortawesome/free-solid-svg-icons';

import {styles} from './styles';

type InputProps = {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  iconName?: IconDefinition | undefined;
  keyboardType?: KeyboardTypeOptions;
  secureTextEntry?: boolean;
  style?: object;
};

export function Input({
  value,
  onChangeText,
  placeholder,
  iconName,
  keyboardType = 'default',
  secureTextEntry = false,
  style = {},
}: InputProps) {
  return (
    <View style={[styles.container, style]}>
      {iconName && (
        <FontAwesomeIcon
          icon={iconName}
          size={20}
          color="#25C0FF"
          style={styles.icon}
        />
      )}
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        style={styles.input}
        placeholderTextColor="#999"
      />
    </View>
  );
}
