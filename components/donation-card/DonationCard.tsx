import {Image, View} from 'react-native';

import {Badge} from '~/components/shared/badge/Badge';
import {Title} from '~/components/shared/title/Title';
import {styles} from './styles';

type DonationCardProps = {
  uri: string;
  badgeTitle: string;
  donationTitle: string;
  price: number;
};

export function DonationCard({
  uri,
  badgeTitle,
  donationTitle,
  price,
}: DonationCardProps) {
  return (
    <View>
      <View>
        <View style={styles.badge}>
          <Badge title={badgeTitle} />
        </View>
        <Image resizeMode="contain" source={{uri}} style={styles.image} />
      </View>
      <View style={styles.donationInfo}>
        <Title type="card">{donationTitle}</Title>
        <Title style={styles.price}>$ {price.toFixed(2)}</Title>
      </View>
    </View>
  );
}
