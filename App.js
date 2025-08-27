import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Onboarding from './Onboarding';
import Profile from './Profile';
import Home from './Home';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding">
        <Stack.Screen 
          name="Onboarding" 
          component={Onboarding} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{ headerShown: true }}
        />
        <Stack.Screen 
          name="Profile" 
          component={Profile} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
