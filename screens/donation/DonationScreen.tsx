import React from 'react';
import {ScrollView} from 'react-native';

import {ScreenContainer} from '~/components/shared/screen-container/ScreenContainer';
import {DonationDetails} from './donation-details/DonationDetails';

export function DonationScreen(): React.JSX.Element {
  return (
    <ScreenContainer>
      <ScrollView showsVerticalScrollIndicator={false}>
        <DonationDetails />
      </ScrollView>
    </ScreenContainer>
  );
}
