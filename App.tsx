import React from 'react';
import {MainNavigation} from '~/navigation/MainNavigation';
import {NavigationContainer} from '@react-navigation/native';

import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import {store, persistor} from '~/redux/store';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <NavigationContainer>
          <MainNavigation />;
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

export default App;
