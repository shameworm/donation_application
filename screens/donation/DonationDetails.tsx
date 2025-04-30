import {View} from 'react-native';
import {useSelector} from 'react-redux';
import {BackButton} from '~/components/shared/button/BackButton';

import {RootState} from '~/redux/store';

export function DonationDetails() {
  const {selectedDonationInfo} = useSelector(
    (state: RootState) => state.donations,
  );
  console.log(selectedDonationInfo);
  return (
    <View>
      <BackButton />
    </View>
  );
}
