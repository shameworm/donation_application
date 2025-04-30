import {View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {faWallet} from '@fortawesome/free-solid-svg-icons';

import {DonationCard} from '~/components/donation-card/DonationCard';
import {Fallback} from '~/components/shared/fallback/Fallback';
import {useFilteredDonations} from '~/hooks/filtered-donations/useFilteredDonations';
import {RootState} from '~/redux/store';
import {routes} from '~/navigation/routes';

import {styles} from './styles';
import {updateSelectedDonationId} from '~/redux/reducers/Donations';

export function DonationsList() {
  const navigation = useNavigation<any>();
  const {categories, selectedCategoryId} = useSelector(
    (state: RootState) => state.categories,
  );
  const dispatch = useDispatch();

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
      {donationsFilteredItems.map(item => {
        const categoryInfo = categories.find(
          val => val.categoryId === selectedCategoryId,
        );
        return (
          <View key={item.donationItemId} style={styles.singleDonationItem}>
            <DonationCard
              onPress={donationId => {
                dispatch(updateSelectedDonationId(donationId));
                navigation.navigate(routes.Donation, {
                  categoryInfo,
                });
              }}
              donationItemId={item.donationItemId}
              badgeTitle={categoryInfo!.name}
              donationTitle={item.name}
              price={parseFloat(item.price)}
              uri={item.image}
            />
          </View>
        );
      })}
    </View>
  );
}
