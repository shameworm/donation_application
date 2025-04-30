import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {HomeScreen} from '~/screens/home/HomeScreen';
import {DonationScreen} from '~/screens/donation/DonationScreen';

import {routes} from './routes';

const Stack = createNativeStackNavigator();

export function MainNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={routes.Home} component={HomeScreen} />
      <Stack.Screen name={routes.Donation} component={DonationScreen} />
    </Stack.Navigator>
  );
}
