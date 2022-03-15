import React from 'react'
import { NavigationContainer } from '@react-navigation/native';

import DrawerNav from './src/navigation/DrawerNav';

import store from './src/store/store';
import { Provider } from 'react-redux';

    import { LogBox } from 'react-native';
    LogBox.ignoreLogs([
      "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
    ]);

const App = () => {
  return  <Provider store={store}>
            <NavigationContainer>
              <DrawerNav/>
            </NavigationContainer>
          </Provider>
};
export default App;
