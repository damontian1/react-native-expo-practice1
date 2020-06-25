import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ExploreScreen from './screens/ExploreScreen';
import SavedScreen from './screens/SavedScreen';
import TripsScreen from './screens/TripsScreen';
import InboxScreen from './screens/InboxScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'EXPLORE') {
              iconName = focused
                ? 'ios-search'
                : 'ios-search';
            } else if (route.name === 'SAVED') {
              iconName = focused ? 'ios-heart' : 'ios-heart';
            } else if (route.name === 'TRIPS') {
              iconName = focused ? 'ios-rocket' : 'ios-rocket';
            } else if (route.name === 'INBOX') {
              iconName = focused ? 'ios-chatboxes' : 'ios-chatboxes';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="EXPLORE" component={ExploreScreen} />
        <Tab.Screen name="SAVED" component={SavedScreen} />
        <Tab.Screen name="TRIPS" component={TripsScreen} />
        <Tab.Screen name="INBOX" component={InboxScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}