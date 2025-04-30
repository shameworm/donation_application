import {View, Text} from 'react-native';
import {faWallet} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useSelector} from 'react-redux';

import {horizontalScale} from '~/assets/styles/scaling';
import {useFilteredDonations} from '~/hooks/filtered-donations/useFilteredDonations';
import {Title} from '~/components/shared/title/Title';
import {DonationCard} from '~/components/donation-card/DonationCard';
import {RootState} from '~/redux/store';

import {styles} from './styles';

export function Donations() {
  const {categories, selectedCategoryId} = useSelector(
    (state: RootState) => state.categories,
  );

  const donationsFilteredItems = useFilteredDonations();

  if (donationsFilteredItems.length <= 0) {
    return (
      <View style={styles.fallbackContainer}>
        <FontAwesomeIcon
          icon={faWallet}
          style={styles.fallbackImage}
          size={horizontalScale(150)}
        />
        <Title type="screen" style={styles.fallbackTitle}>
          No donations found
        </Title>
        <Text style={styles.fallbackSubtitle}>
          Try adjusting your filters or check back later.
        </Text>
      </View>
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
