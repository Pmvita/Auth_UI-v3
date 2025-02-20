// app/RootLayout.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

// Auth Screens
import OnboardingScreen from './auth/OnboardingScreen';
import LoginScreen from './auth/LoginScreen';
import SignUpScreen from './auth/SignUpScreen';
import ForgotPasswordScreen from './auth/ForgotPasswordScreen';
// Tabs Screens
//import SettingsScreen from './tabs/SettingsScreen';
//import HomeScreen from './tabs/HomeScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const RootLayout = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Onboarding">
                <Stack.Screen name="Onboarding" 
                component={OnboardingScreen} 
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen name="Login" 
                component={LoginScreen} 
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen name="SignUp" 
                component={SignUpScreen} 
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen name="ForgotPassword" 
                component={ForgotPasswordScreen} 
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen name="Tabs" component={Tabs} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const Tabs = () => {
    return (
        <Tab.Navigator>
          {/* Add your tabs here */}
        </Tab.Navigator>
    );
};

export default RootLayout;


