import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { SplashScreen } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

import BottomTabNavigator from './navigation/BottomTabNavigator';
import useLinking from './navigation/useLinking';


import './style.css';


import Home from './components/Home/Home';
import Screen2 from './components/Screen2/Screen2';
import Screen3 from './components/Screen3/Screen3';
import Screen4 from './components/Screen4/Screen4';

const Stack = createStackNavigator();

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [initialNavigationState, setInitialNavigationState] = React.useState();
  const containerRef = React.useRef();
  const { getInitialState } = useLinking(containerRef);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHide();

        // Load our initial navigation state
        setInitialNavigationState(await getInitialState());

        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          'SFP-bold': require('./assets/fonts/SFProDisplay-Bold.ttf'),
          'SFP': require('./assets/fonts/SFProDisplay-Regular.ttf'),
          'SFP-semi': require('./assets/fonts/SFProDisplay-Semibold.ttf'),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hide();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}

        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/screen2" exact component={Screen2} />
            <Route path="/screen3" exact component={Screen3} />
            <Route path="/screen4" exact component={Screen4} />
          </Switch>
        </BrowserRouter>

        {/*<NavigationContainer ref={containerRef} initialState={initialNavigationState}>*/}
        {/*  <Stack.Navigator>*/}
        {/*    <Stack.Screen name="Root" component={BottomTabNavigator} />*/}
        {/*  </Stack.Navigator>*/}
        {/*</NavigationContainer>*/}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
