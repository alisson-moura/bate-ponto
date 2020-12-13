import React from 'react';
import Constants from 'expo-constants';
import { useNavigation } from '@react-navigation/native';
import Icon from '@expo/vector-icons/MaterialIcons';
import { Text, StyleSheet, View } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import * as theme from '../theme';

export default function Header({ children, menuButton = false, closeButton = false, backButton = false, border = true }) {
    const navigation = useNavigation()

    function handleNavigateGoBack() {
        navigation.goBack()
    }

    if (menuButton) {
        return (
            <View style={{ ...styles.container, borderBottomWidth: border ? 1 : 0, borderColor: border ? '#dde3f0' : 0 }}>
                {menuButton ? (
                    <BorderlessButton onPress={() => { }}><Icon name="menu" size={24} color='#8FA7B2' /></BorderlessButton>
                )
                    : <View style={styles.centerTitle} />}

                <Text style={styles.title}>{children}</Text>

                {closeButton ? (
                    <BorderlessButton><Icon name="close" size={24} color={theme.colors.pinky} /></BorderlessButton>
                ) : <View style={styles.centerTitle} />}

            </View>
        );
    }
    return (
        <View style={{ ...styles.container, borderBottomWidth: border ? 1 : 0, borderColor: border ? '#dde3f0' : 0 }}>
            {backButton ? (
                <BorderlessButton onPress={handleNavigateGoBack}><Icon name="keyboard-backspace" size={24} color={theme.colors.blue} /></BorderlessButton>
            )
                : <View style={styles.centerTitle} />}

            <Text style={styles.title}>{children}</Text>

            {closeButton ? (
                <BorderlessButton><Icon name="close" size={24} color={theme.colors.pinky} /></BorderlessButton>
            ) : <View style={styles.centerTitle} />}

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight + Constants.statusBarHeight,
        paddingBottom: Constants.statusBarHeight,
        paddingHorizontal: 18,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#dde3f0',
    },
    title: {
        fontFamily: 'Roboto_700Bold',
        color: '#8fa7b3',
        fontSize: 16,
    },
    centerTitle: {
        width: 24,
        height: 24
    }
});