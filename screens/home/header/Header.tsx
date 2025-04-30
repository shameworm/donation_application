import {Image, Text, View} from 'react-native';
import {useSelector} from 'react-redux';

import {Title} from '~/components/shared/title/Title';
import {Input} from '~/components/shared/input/Input';
import {Avatar} from '~/components/shared/avatar/Avatar';
import {Button} from '~/components/shared/button/Button';

import {RootState} from '~/redux/store';

import {styles} from './styles';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

export function Header(): React.JSX.Element {
  const user = useSelector((state: RootState) => state.user);
  return (
    <View style={styles.topBarContainer}>
      <View style={styles.headerContainer}>
        <View>
          <Text style={styles.introText}>Hello,</Text>
          <Title type="screen">{`${user.firstName} ${user.lastName[0]}.👋`}</Title>
        </View>
        <Avatar avatar={user.profileImage} resizeMode={'contain'} />
      </View>
      <View>
        <Input
          value={''}
          onChangeText={() => {}}
          iconName={faSearch}
          placeholder="Search"
        />
      </View>
      <Button onPress={() => {}} variant="custom">
        <Image
          source={require('~/assets/images/highlighted_image.png')}
          style={styles.higlightImage}
          resizeMode="contain"
        />
      </Button>
    </View>
  );
}
