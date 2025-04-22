import {Text, View} from 'react-native';
import {styles} from './styles';

type BadgeProps = {
  title: string;
};

export function Badge({title}: BadgeProps): React.JSX.Element {
  return (
    <View style={styles.badgeContainer}>
      <Text style={styles.badgeText}>{title}</Text>
    </View>
  );
}
