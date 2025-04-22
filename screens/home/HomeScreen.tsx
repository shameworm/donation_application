import React from 'react';

import {ScreenContainer} from '~/components/shared/screen-container/ScreenContainer';
import {Title} from '~/components/shared/title/Title';

export function HomeScreen(): React.JSX.Element {
  return (
    <ScreenContainer>
      <Title type="screen">Home Screen</Title>
      <Title type="card">Home Screen</Title>
      <Title type="default">Home Screen</Title>
    </ScreenContainer>
  );
}
