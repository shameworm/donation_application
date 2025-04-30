import {View, Text} from 'react-native';
import {useFilteredDonations} from '~/hooks/filtered-donations/useFilteredDonations';

export function Donations() {
  const donationsFilteredItems = useFilteredDonations();
  console.log(donationsFilteredItems);
  return (
    <View>
      <Text>Hello</Text>
    </View>
  );
}
