import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackScreenProps } from '@react-navigation/stack';
 
import HomeScreen from '~/screens/HomeScreen';
import SkillsScreen from '~/screens/SkillsScreen';
 
// Define the types for the navigation routes
export type RootStackParamList = {
  Home: undefined;
  Skills: undefined;
};
 
// Define the type for screen props
export type ScreenProps<T extends keyof RootStackParamList> = StackScreenProps<RootStackParamList, T>;
 
const Stack = createStackNavigator<RootStackParamList>();
 
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Skills" component={SkillsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
