import React, { useState } from 'react';
import Constants from 'expo-constants';
import Icon from '@expo/vector-icons/MaterialIcons';
import { View, StyleSheet, Text, TextInput, Image, Dimensions, SafeAreaView, ScrollView, StatusBar, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Button from '../components/Button';
import * as theme from '../theme';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import avatar from '../assets/images.png';

export default function ConfirmProfile() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.content}>

                <View style={styles.avatarContainer}>
                    <Image source={avatar} style={styles.avatarImage} />
                    <BorderlessButton style={styles.avatarButton}>
                        <Icon name="photo-camera" size={38}></Icon>
                    </BorderlessButton>
                </View>

                <View >
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>Perfil</Text>
                        <BorderlessButton style={{ marginHorizontal: 10 }}><Icon name="edit" size={24} /></BorderlessButton>
                    </View>
                    <View style={styles.field}>
                        <View style={{ marginRight: 12 }}><Icon name="person" size={24} /></View>
                        <View>
                            <Text style={styles.nameField}>Nome</Text>
                            <Text style={styles.valueField}>Alisson Matheus de Oliveira Moura</Text>
                        </View>
                    </View>

                    <View style={styles.field}>
                        <View style={{ marginRight: 12 }}><Icon name="domain" size={24} /></View>
                        <View>
                            <Text style={styles.nameField}>Empresa</Text>
                            <Text style={styles.valueField}>Hospital de Base</Text>
                        </View>
                    </View>

                    <View style={styles.field}>
                        <View style={{ marginRight: 12 }}><Icon name="work" size={24} /></View>
                        <View>
                            <Text style={styles.nameField}>Cargo</Text>
                            <Text style={styles.valueField}>Auxiliar de Suporte</Text>
                        </View>
                    </View>

                    <View style={{ ...styles.titleContainer, marginTop: 24 }}>
                        <Text style={styles.title}>Jornada</Text>
                        <BorderlessButton style={{ marginHorizontal: 10 }}><Icon name="edit" size={24} /></BorderlessButton>
                    </View>
                    <View style={styles.field}>
                        <View style={{ marginRight: 12 }}><Icon name="schedule" size={24} /></View>
                        <View>
                            <Text style={styles.nameField}>Horário</Text>
                            <Text style={styles.valueField}>07:00 às 17:00</Text>
                        </View>
                        <View style={{ marginHorizontal: 100 }}>
                            <Text style={styles.nameField}>Intervalo</Text>
                            <Text style={styles.valueField}>13:00 às 14:00</Text>
                        </View>
                    </View>

                    <View style={styles.daysOfWeekContainer}>
                        <View style={{ marginRight: 12, flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}><Icon name="date-range" size={24} />
                            <Text style={{ ...styles.nameField, marginLeft: 15 }}>Dias da Semana</Text>
                        </View>
                        <View style={styles.daysOfWeek}>
                            <RectButton onPress={() => { }} style={styles.dayButton}>
                                <Text style={styles.dayText}>D</Text>
                            </RectButton>

                            <RectButton onPress={() => {

                            }} style={styles.dayButtonSelected}>
                                <Text style={styles.dayTextSelected}>S</Text>
                            </RectButton>

                            <RectButton onPress={() => { }} style={styles.dayButtonSelected}>
                                <Text style={styles.dayTextSelected}>T</Text>
                            </RectButton>

                            <RectButton onPress={() => { }} style={styles.dayButtonSelected}>
                                <Text style={styles.dayTextSelected}>Q</Text>
                            </RectButton>

                            <RectButton onPress={() => { }} style={styles.dayButtonSelected}>
                                <Text style={styles.dayTextSelected}>Q</Text>
                            </RectButton>

                            <RectButton onPress={() => { }} style={styles.dayButtonSelected}>
                                <Text style={styles.dayTextSelected}>S</Text>
                            </RectButton>

                            <RectButton onPress={() => { }} style={styles.dayButton}>
                                <Text style={styles.dayText}>D</Text>
                            </RectButton>
                        </View>
                    </View>

                </View>
                <View style={{marginBottom: 24}}>
                    <Button icon="done" onPress={() => {navigation.navigate('Dashboard') }}>Confirmar</Button>
                </View>
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
        marginHorizontal: 20,
    },

    avatarContainer: {
        alignSelf: 'center',
        width: 120,
        height: 150,
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginBottom: 10,
        marginTop: 16,
    },
    avatarImage: {
        height: 120,
        width: 120,
        borderRadius: 60
    },
    avatarButton: {
        marginTop: -20,
    },

    titleContainer: {
        borderBottomColor: theme.colors.border,
        borderBottomWidth: 2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    title: {
        color: theme.colors.blueFont,
        fontSize: theme.sizes.h2,
        fontFamily: 'Roboto_900Black',
        marginBottom: 6,

    },
    field: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 16,
        flex: 1
    },
    nameField: {
        fontSize: 16,
        color: theme.colors.secundary,
        fontFamily: 'Roboto_500Medium',
    },
    valueField: {
        fontSize: 16,
        color: theme.colors.black,
        fontFamily: 'Roboto_900Black',
    },
    daysOfWeek: {
        flexDirection: 'row',
        marginBottom: 16,
        justifyContent: 'center'
    },
    dayButton: {
        marginHorizontal: 4,
        backgroundColor: theme.colors.gray3,
        paddingVertical: 6,
        paddingHorizontal: 12,
    },
    dayText: {
        color: theme.colors.black,
        fontFamily: 'Roboto_700Bold',
        fontSize: 15
    },
    dayTextSelected: {
        color: theme.colors.white,
        fontFamily: 'Roboto_700Bold',
        fontSize: 15
    },
    dayButtonSelected: {
        marginHorizontal: 4,
        backgroundColor: theme.colors.green,
        paddingVertical: 6,
        paddingHorizontal: 12,
    },
    daysOfWeekContainer: {
        marginTop: 16
    }

});