import React from 'react';
import {ScrollView} from 'react-native';
import {Categories} from '~/components/categories/Categories';

import {ScreenContainer} from '~/components/shared/screen-container/ScreenContainer';
import {Header} from '~/screens/home/header/Header';

export function HomeScreen(): React.JSX.Element {
  return (
    <ScreenContainer>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header />
        <Categories />
      </ScrollView>
    </ScreenContainer>
  );
}
