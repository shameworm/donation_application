import {Image, View} from 'react-native';

import {Badge} from '~/components/shared/badge/Badge';
import {Title} from '~/components/shared/title/Title';
import {Button} from '~/components/shared/button/Button';

import {styles} from './styles';

type DonationCardProps = {
  donationItemId: number;
  uri: string;
  badgeTitle: string;
  donationTitle: string;
  price: number;
  onPress: (value: any) => void;
};

export function DonationCard({
  donationItemId,
  uri,
  badgeTitle,
  donationTitle,
  price,
  onPress,
}: DonationCardProps) {
  return (
    <Button variant="custom" onPress={() => onPress(donationItemId)}>
      <View>
        <View style={styles.badge}>
          <Badge title={badgeTitle} />
        </View>
        <Image resizeMode="cover" source={{uri}} style={styles.image} />
      </View>
      <View style={styles.donationInfo}>
        <Title type="card">{donationTitle}</Title>
        <Title style={styles.price}>$ {price.toFixed(2)}</Title>
      </View>
    </Button>
  );
}
