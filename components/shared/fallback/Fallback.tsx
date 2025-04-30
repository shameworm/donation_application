import {Text, View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

import {Title} from '~/components/shared/title/Title';
import {horizontalScale} from '~/assets/styles/scaling';
import {styles} from './styles';
import {IconDefinition} from '@fortawesome/free-solid-svg-icons';

type FallbackProps = {
  title: string;
  subtitle: string;
  icon?: IconDefinition;
};

export function Fallback({title, subtitle, icon}: FallbackProps) {
  return (
    <View style={styles.fallbackContainer}>
      {icon && (
        <FontAwesomeIcon
          icon={icon}
          style={styles.fallbackImage}
          size={horizontalScale(150)}
          color="#2979F2"
        />
      )}
      <Title type="screen" style={styles.fallbackTitle}>
        {title}
      </Title>
      <Text style={styles.fallbackSubtitle}>{subtitle}</Text>
    </View>
  );
}
