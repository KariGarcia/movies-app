import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NativeBaseProvider } from 'native-base';
import Header from './components/layout/Header';
import HomeStackScreen from './components/navigation/HomeStackScreen';
import SearchScreen from './components/screens/SearchScreen';
import TvSeriesScreen from './components/screens/TvSeriesScreen';

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <NativeBaseProvider> 
      <Header/>
      <NavigationContainer>
          <Tab.Navigator screenOptions={{
                    tabBarLabelStyle : { textTransform: "none" },
                    tabBarIndicatorStyle: { backgroundColor: '#2e3e51'}
                }}>
            <Tab.Screen name="Movies" component={HomeStackScreen} />
            <Tab.Screen name="Search Results" component={SearchScreen} />
            <Tab.Screen name="TV Shows" component={TvSeriesScreen} />
          </Tab.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}