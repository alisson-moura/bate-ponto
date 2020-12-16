import React, { useState } from 'react';
import Constants from 'expo-constants';
import Icon from '@expo/vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { View, StyleSheet, Text, TextInput, Image, Dimensions, SafeAreaView, ScrollView, StatusBar, } from 'react-native';
import Button from '../components/Button';
import * as theme from '../theme';
import { BorderlessButton, RectButton, TouchableOpacity } from 'react-native-gesture-handler';
import avatar from '../assets/images.png';

export default function Dashboard() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.extendHeader} />
            <View style={styles.card}>
                <Image source={avatar} style={styles.avatarImage} />
                <View style={styles.infoText}>
                    <Text style={styles.name}>Alisson Moura</Text>
                    <Text style={styles.company}>Hospital de Base</Text>
                    <Text style={styles.job}>Auxliar de Suporte</Text>
                </View>
            </View>

            <View style={styles.content}>
                <View style={styles.header}>
                    <Text style={styles.textHeader}>Ultímos registros</Text>
                    <TouchableOpacity onPress={() => { navigation.navigate('ListRegisters') }}>
                        <Text style={styles.buttonHeader}>Ver todos</Text>
                    </TouchableOpacity>
                </View>


                <ScrollView style={styles.scrollRegister} showsVerticalScrollIndicator={false}>

                    <TouchableOpacity style={styles.registerContainer} onPress={() => navigation.navigate('RegisterDetail')}>
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
            </View>

            <View style={styles.floatButton}>
                <TouchableOpacity onPress={() => navigation.navigate('NewRegister')}
                style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <Icon name="fingerprint" size={40} color="#fff"/>
                </TouchableOpacity>
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
        justifyContent: 'center',
    },
    extendHeader: {
        borderBottomWidth: 1,
        borderColor: '#dde3f0',
        height: 90,
        paddingHorizontal: 20,
        backgroundColor: theme.colors.gray2
    },
    card: {
        height: 180,
        marginHorizontal: 15,
        backgroundColor: theme.colors.primary,
        marginTop: -90,
        borderRadius: theme.sizes.border,
        elevation: 2,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    avatarImage: {
        height: 120,
        width: 120,
        borderRadius: 60,
        marginHorizontal: 16
    },
    infoText: {
        flex: 1,
        marginRight: 16,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 16
    },
    name: {
        fontSize: 28,
        fontFamily: 'Roboto_900Black',
        textAlign: 'center',
        color: '#fff',
        marginBottom: 8
    },
    company: {
        fontSize: 18,
        fontFamily: 'Roboto_900Black',
        textAlign: 'center',
        color: '#fff',
        marginBottom: 4
    },
    job: {
        fontSize: 12,
        fontFamily: 'Roboto_900Black',
        textAlign: 'center',
        color: '#fff',
    },
    header: {
        marginTop: 32,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textHeader: {
        color: theme.colors.secundary,
        fontFamily: 'Roboto_500Medium',
        fontSize: theme.sizes.title
    },
    buttonHeader: {
        color: theme.colors.black,
        fontFamily: 'Roboto_700Bold',
        fontSize: theme.sizes.title
    },
    scrollRegister: {
        marginTop: 24
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
    },
    floatButton: {
        position: 'absolute',
        width: 62,
        height: 62,
        bottom: 30 + 80,
        right: 20,
        borderRadius: 62/2,
        backgroundColor: theme.colors.green,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 2
    }
});