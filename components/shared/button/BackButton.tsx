import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {Button} from './Button';
import {styles} from './styles';
import {horizontalScale} from '~/assets/styles/scaling';

export function BackButton() {
  const navigation = useNavigation();

  return (
    <Button
      onPress={() => navigation.goBack()}
      variant="link"
      styles={styles.backButton}>
      <FontAwesomeIcon icon={faArrowLeft} size={horizontalScale(20)} />
    </Button>
  );
}
