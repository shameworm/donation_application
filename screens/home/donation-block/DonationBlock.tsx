import {View} from 'react-native';
import {CategoriesTabs} from './categories-tabs/CategoriesTabs';
import {DonationsList} from './donations-list/DonationsList';
import {styles} from './styles';

export function DonationBlock() {
  return (
    <View style={styles.DonationBlockContainer}>
      <CategoriesTabs />
      <DonationsList />
    </View>
  );
}
