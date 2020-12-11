import React, { useState } from 'react';
import Constants from 'expo-constants';
import Icon from '@expo/vector-icons/MaterialIcons';
import { View, StyleSheet, Text, TextInput, Image, Dimensions, SafeAreaView, ScrollView, } from 'react-native';
import Button from '../components/Button';
import * as theme from '../theme';
import { BorderlessButton } from 'react-native-gesture-handler';
import avatar from '../assets/images.png';

export default function ConfirmProfile() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.content}>

                <View style={styles.avatarContainer}>
                    <Image source={avatar} style={styles.avatarImage} />
                    <BorderlessButton style={styles.avatarButton}>
                        <Icon name="photo-camera" size={38}></Icon>
                    </BorderlessButton>
                </View>

                <View style={styles.infoContainer}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>Perfil</Text>
                        <BorderlessButton style={{ marginHorizontal: 10 }}><Icon name="edit" size={24} /></BorderlessButton>
                    </View>
                    <View style={styles.field}>
                        <View style={{marginRight: 12}}><Icon name="person" size={24} /></View>
                        <View>
                            <Text style={styles.nameField}>Nome</Text>
                            <Text style={styles.valueField}>Alisson Matheus de Oliveira Moura</Text>
                        </View>
                    </View>

                    <View style={styles.field}>
                        <View style={{marginRight: 12}}><Icon name="domain" size={24} /></View>
                        <View>
                            <Text style={styles.nameField}>Empresa</Text>
                            <Text style={styles.valueField}>Hospital de Base</Text>
                        </View>
                    </View>

                    <View style={styles.field}>
                        <View style={{marginRight: 12}}><Icon name="work" size={24} /></View>
                        <View>
                            <Text style={styles.nameField}>Cargo</Text>
                            <Text style={styles.valueField}>Auxiliar de Suporte</Text>
                        </View>
                    </View>

                    <View style={{...styles.titleContainer, marginTop: 24}}>
                        <Text style={styles.title}>Jornada</Text>
                        <BorderlessButton style={{ marginHorizontal: 10 }}><Icon name="edit" size={24} /></BorderlessButton>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView >
    );
}

const styles = StyleSheet.create({
    container: {
        height: Dimensions.get('window').height - (2 * Constants.statusBarHeight),
        paddingBottom: Constants.statusBarHeight,
        backgroundColor: theme.colors.gray,
    },
    content: {
        flex: 1,
        marginHorizontal: 20,
        marginVertical: 20,
    },

    avatarContainer: {
        alignSelf: 'center',
        width: 120,
        height: 150,
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginBottom: 10,
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
        marginTop: 16
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
    }


});