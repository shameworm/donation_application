import React from 'react';
import {ScrollView} from 'react-native';
import {useSelector} from 'react-redux';

import {ScreenContainer} from '~/components/shared/screen-container/ScreenContainer';
import {RootState} from '~/redux/store';
import {Header} from '~/screens/home/header/Header';
import {DonationBlock} from './donationBlock/DonationBlock';

export function HomeScreen(): React.JSX.Element {
  const donations = useSelector((state: RootState) => state.donations);
  console.log(donations);
  return (
    <ScreenContainer>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header />
        <DonationBlock />
      </ScrollView>
    </ScreenContainer>
  );
}
