import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Button from '../components/Button';
import Logo from '../../assets/logo.png';
import * as theme from '../theme';

export default function Home() {
    const navigation = useNavigation();
    function handleNavigateToRegister() {
        navigation.navigate('Register');
    }
    return (
        <View style={styles.container}>
            <Image source={Logo} />
            <Text style={styles.title}>Controle as suas horas trabalhadas e guarde seus comprovantes.</Text>
            <Text style={styles.description}>Se livre dos tickets de ponto e tenha tudo em um só lugar.</Text>
            <Button icon="person-add" onPress={handleNavigateToRegister}>Cadastrar-se</Button>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    title: {
        color: theme.colors.primary,
        fontSize: theme.sizes.h1,
        fontFamily: 'Roboto_900Black',
        textAlign: 'center',
        marginTop: 50,
        marginBottom: 50,
        marginHorizontal: 15,
    },
    description: {
        color: theme.colors.blueFont,
        fontSize: theme.sizes.h3,
        textAlign: 'center',
        marginBottom: 50,
        marginHorizontal: 15,
        fontFamily: 'Roboto_900Black'
    }

});