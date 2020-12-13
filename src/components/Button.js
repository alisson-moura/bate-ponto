import React from 'react';
import Icon from '@expo/vector-icons/MaterialIcons';
import { Text, StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import * as theme from '../theme';

export default function Button({ children, icon, onPress }) {

    return (
        <RectButton style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{children}</Text>
            <Icon name={icon} size={28} color="#fff" />
        </RectButton>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: theme.colors.green,
        flexDirection: 'row',
        width: 325,
        height: 56,
        borderRadius: theme.sizes.border,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        elevation: 2,
    },
    text: {
        color: theme.colors.white,
        marginRight:  16,
        fontSize: theme.sizes.h3,
        fontFamily: 'Roboto_900Black',
    }
});