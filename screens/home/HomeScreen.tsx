import React from 'react';
import {Text, View} from 'react-native';

import {ScreenContainer} from '~/components/shared/screen-container/ScreenContainer';
import {Title} from '~/components/shared/title/Title';
import {Button} from '~/components/shared/button/Button';
import {Badge} from '~/components/shared/badge/Badge';

export function HomeScreen(): React.JSX.Element {
  return (
    <ScreenContainer>
      <Title type="screen">Home Screen</Title>
      <Title type="card">Home Screen</Title>
      <Title type="default">Home Screen</Title>
      <Button onPress={() => {}}>
        <Text>Text</Text>
      </Button>
      <View>
        <Badge title="Badge" />
      </View>
    </ScreenContainer>
  );
}
