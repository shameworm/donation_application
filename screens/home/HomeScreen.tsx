import React from 'react';
import {ScrollView} from 'react-native';

import {ScreenContainer} from '~/components/shared/screen-container/ScreenContainer';
import {TopBar} from '~/screens/home/top-bar/TopBar';

export function HomeScreen(): React.JSX.Element {
  return (
    <ScreenContainer>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TopBar />
      </ScrollView>
    </ScreenContainer>
  );
}
