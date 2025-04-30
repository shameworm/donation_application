import {RouteProp, useRoute} from '@react-navigation/native';
import {Image, View, Text} from 'react-native';
import {useSelector} from 'react-redux';

import {Badge} from '~/components/shared/badge/Badge';
import {BackButton} from '~/components/shared/button/BackButton';
import {Button} from '~/components/shared/button/Button';
import {Title} from '~/components/shared/title/Title';
import {RootState} from '~/redux/store';

import {styles} from './styles';

type DonationRouteParams = {
  Donation: {
    categoryInfo: {
      categoryId: number;
      name: string;
    };
  };
};

export function DonationDetails() {
  const route = useRoute<RouteProp<DonationRouteParams, 'Donation'>>();
  const {categoryInfo} = route.params;
  const {selectedDonationInfo} = useSelector(
    (state: RootState) => state.donations,
  );
  console.log(categoryInfo);
  console.log('selectedDonationInfo:', selectedDonationInfo);
  return (
    <View>
      <BackButton />
      <Image source={{uri: selectedDonationInfo?.image}} style={styles.image} />
      <View style={styles.badge}>
        <Badge title={categoryInfo.name} />
      </View>
      <Title type="screen">{selectedDonationInfo?.name}</Title>
      <Text style={styles.description}>
        {selectedDonationInfo?.description}
      </Text>
      <Button onPress={() => {}} variant="primary" styles={styles.button}>
        <Text style={styles.buttonText}>Donate</Text>
      </Button>
    </View>
  );
}
