import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Header from './components/Header';

import Home from './screens/Home';
import Register from './screens/Register';
import ConfirmProfile from './screens/ConfirmProfile';
import Dashboard from './screens/Dashboard';
import ListRegisters from './screens/ListRegisters';

const { Navigator, Screen } = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false, cardStyle: { backgroundColor: '#f2f3f5' } }}>
                <Screen name="Home" component={Home} />
                <Screen name="Register" component={Register} options={{ headerShown: true, header: () => <Header backButton>Informe seus dados</Header> }} />
                <Screen name="ConfirmProfile" component={ConfirmProfile} options={{headerShown: true, header: () => <Header backButton closeButton>Adicionar Avatar</Header> }} />
                <Screen name="Dashboard" component={Dashboard} options={{headerShown: true, header: () => <Header menuButton border={false}>Dashboard</Header> }} />
                <Screen name="ListRegisters" component={ListRegisters} options={{headerShown: true, header: () => <Header backButton >Registros de Ponto</Header> }} />
            </Navigator>
        </NavigationContainer>
    );
}