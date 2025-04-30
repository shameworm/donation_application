import {View} from 'react-native';
import {Categories} from '~/components/categories/Categories';
import {Donations} from '~/components/donations/Donations';
import {styles} from './styles';

export function DonationBlock() {
  return (
    <View style={styles.DonationBlockContainer}>
      <Categories />
      <Donations />
    </View>
  );
}
