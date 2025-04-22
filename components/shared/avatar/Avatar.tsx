import {View, Image} from 'react-native';

import {styles} from './styles';

type AvatarProps = {
  avatar: number;
  viewed?: boolean;
};
export function Avatar({avatar}: AvatarProps): React.JSX.Element {
  return (
    <View style={styles.userProfileImageContainer}>
      <Image style={styles.userProfileImage} source={avatar} />
    </View>
  );
}
