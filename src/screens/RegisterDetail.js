import React, { useState } from 'react';
import Constants from 'expo-constants';
import Icon from '@expo/vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { View, StyleSheet, Text, TextInput, Image, Dimensions, SafeAreaView, ScrollView, StatusBar, } from 'react-native';
import Button from '../components/Button';
import * as theme from '../theme';
import { BorderlessButton, RectButton, TouchableOpacity } from 'react-native-gesture-handler';
import notFound from '../assets/notFound.png';

export default function RegisterDetail() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <View style={styles.registerContainer}>
                    <View style={styles.dateContainer}>
                        <Text style={styles.dateText}>07:00</Text>
                        <Text style={styles.dateText}>13/12/2020</Text>
                    </View>
                    <View style={styles.dataContainer}>
                        <View style={{ flexDirection: 'row', marginBottom: 4 }}>
                            <Text style={styles.textField}>Tipo:</Text>
                            <Text style={styles.valueField}>Início da jornada</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.textField}>Comprovante:</Text>
                            <Text style={styles.valueField}>Sim</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.card}>
                    <Image source={notFound} style={styles.image} />
                </View>
            </View>
        </SafeAreaView >
    );
}

const styles = StyleSheet.create({
    container: {
        height: Dimensions.get('window').height,
        paddingBottom: 80,
        backgroundColor: theme.colors.gray,
    },
    content: {
        flex: 1,
        marginHorizontal: 25,
    },
    card: {
        height: 270,
        borderRadius: theme.sizes.border,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',

    },
    image: {
        height: 270,
        width: 300,
        backgroundColor: '#fff', borderRadius: 8
    },
    registerContainer: {
        backgroundColor: theme.colors.white,
        height: 68,
        borderRadius: 8,
        flexDirection: 'row',
        elevation: 1,
        alignItems: 'center',
        marginBottom: 40,
        marginTop: 40
    },
    dateContainer: {
        backgroundColor: theme.colors.primary,
        height: 68,
        borderBottomStartRadius: 8,
        borderTopLeftRadius: 8,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    dateText: {
        color: '#fff',
        fontSize: 16,
        fontFamily: 'Roboto_700Bold'
    },
    dataContainer: {
        marginLeft: 16
    },
    textField: {
        marginRight: 8,
        color: theme.colors.secundary,
        fontFamily: 'Roboto_700Bold',
        fontSize: 16
    },
    valueField: {
        color: theme.colors.black,
        fontFamily: 'Roboto_500Medium',
        fontSize: 16
    },
    floatButton: {
        position: 'absolute',
        width: 62,
        height: 62,
        bottom: 30 + 80,
        right: 20,
        borderRadius: 62 / 2,
        backgroundColor: theme.colors.green,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 2
    }
});