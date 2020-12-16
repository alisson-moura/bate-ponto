import React, { useState } from 'react';
import Constants from 'expo-constants';
import Icon from '@expo/vector-icons/MaterialIcons';
import { View, StyleSheet, Text, TextInput, Image, Dimensions, SafeAreaView, ScrollView, StatusBar, } from 'react-native';
import Button from '../components/Button';
import * as theme from '../theme';
import { BorderlessButton, RectButton, TouchableOpacity } from 'react-native-gesture-handler';
import avatar from '../assets/images.png';

export default function ListRegisters() {
    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.card}>
                <Text style={{ flex: 0.8, textAlign: 'center', ...styles.date }}>07 / Dezembro / 2020</Text>
                <BorderlessButton>
                    <Icon name="date-range" size={24} color='#000' />
                </BorderlessButton>
            </View>


            <ScrollView style={{ marginHorizontal: 20, marginBottom: 10 }} showsVerticalScrollIndicator={false}>

                <TouchableOpacity style={styles.registerContainer}>
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
                </TouchableOpacity>

                <TouchableOpacity style={styles.registerContainer}>
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
                </TouchableOpacity>
                <TouchableOpacity style={styles.registerContainer}>
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
                </TouchableOpacity>
                <TouchableOpacity style={styles.registerContainer}>
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
                </TouchableOpacity>
                <TouchableOpacity style={styles.registerContainer}>
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
                </TouchableOpacity>
                <TouchableOpacity style={styles.registerContainer}>
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
                </TouchableOpacity>
                <TouchableOpacity style={styles.registerContainer}>
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
                </TouchableOpacity>

            </ScrollView>


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
        justifyContent: 'center',
    },
    card: {
        height: 42,
        marginHorizontal: 50,
        backgroundColor: theme.colors.white,
        marginVertical: 40,
        borderRadius: 8,
        elevation: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    date: {
        fontSize: 16,
        fontFamily: 'Roboto_700Bold',
        color: '#000'
    },
    registerContainer: {
        backgroundColor: theme.colors.white,
        height: 68,
        borderRadius: 8,
        flexDirection: 'row',
        elevation: 1,
        alignItems: 'center',
        marginBottom: 16
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
    }
});