import {View} from 'react-native';
import {useSelector} from 'react-redux';
import {faWallet} from '@fortawesome/free-solid-svg-icons';

import {DonationCard} from '~/components/donation-card/DonationCard';
import {Fallback} from '~/components/shared/fallback/Fallback';
import {useFilteredDonations} from '~/hooks/filtered-donations/useFilteredDonations';
import {RootState} from '~/redux/store';

import {styles} from './styles';

export function Donations() {
  const {categories, selectedCategoryId} = useSelector(
    (state: RootState) => state.categories,
  );

  const donationsFilteredItems = useFilteredDonations();

  if (donationsFilteredItems.length <= 0) {
    return (
      <Fallback
        title="No donations found"
        subtitle="Try adjusting your filters or check back later."
        icon={faWallet}
      />
    );
  }

  return (
    <View style={styles.donationItemsContainer}>
      {donationsFilteredItems.map(item => (
        <View key={item.donationItemId} style={styles.singleDonationItem}>
          <DonationCard
            onPress={donationId => {
              console.log('Pressed donation:', donationId);
            }}
            donationItemId={item.donationItemId}
            badgeTitle={
              categories.filter(val => val.categoryId === selectedCategoryId)[0]
                .name
            }
            donationTitle={item.name}
            price={parseFloat(item.price)}
            uri={item.image}
          />
        </View>
      ))}
    </View>
  );
}
