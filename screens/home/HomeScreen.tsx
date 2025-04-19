import React from 'react';

import {ScreenContainer} from '~/components/shared/screen-container/ScreenContainer';
import {Button} from '~/components/shared/button/Button';
import {Title} from '~/components/shared/title/Title';

export function HomeScreen(): React.JSX.Element {
  return (
    <ScreenContainer>
      <Title type="screen">Home Screen</Title>
      <Title type="card">Home Screen</Title>
      <Title type="default">Home Screen</Title>
      <Button title="Hello" onPress={() => {}} />
      <Button title="Hello" onPress={() => {}} variant="link" />
      <Button title="Hello" onPress={() => {}} variant="secondary" />
      <Button title="Hello" onPress={() => {}} variant="custom" />
    </ScreenContainer>
  );
}
