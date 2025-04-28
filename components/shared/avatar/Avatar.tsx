import {View, Image, ImageProps} from 'react-native';

import {styles} from './styles';

type AvatarProps = {
  avatar: string;
} & Omit<ImageProps, 'source'>;
export function Avatar({avatar, ...props}: AvatarProps): React.JSX.Element {
  return (
    <View>
      <Image
        style={styles.userProfileImage}
        source={{uri: avatar}}
        {...props}
      />
    </View>
  );
}
