import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Header from './components/Header';

import Home from './screens/Home';
import Register from './screens/Register';

const { Navigator, Screen } = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false, cardStyle: { backgroundColor: '#f2f3f5' } }}>
                <Screen name="Home" component={Home} />
                <Screen name="Register" component={Register} options={{ headerShown: true, header: () => <Header backButton>Informe seus dados</Header> }} />
            </Navigator>
        </NavigationContainer>
    );
}