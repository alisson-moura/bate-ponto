import React, { useState } from 'react';
import Constants from 'expo-constants';
import { Picker } from '@react-native-picker/picker';
import Icon from '@expo/vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { View, StyleSheet, Text, TextInput, Image, Dimensions, SafeAreaView, ScrollView, StatusBar, } from 'react-native';
import Button from '../components/Button';
import * as theme from '../theme';
import { BorderlessButton, RectButton, TouchableOpacity } from 'react-native-gesture-handler';
import avatar from '../assets/images.png';

export default function NewRegister() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <View style={styles.card}>
                    <View style={styles.typeRegister}>
                        <Text style={styles.type}>Tipo: </Text>
                        <Picker
                            selectedValue={"fim do intervalo"}
                            style={styles.picker}
                            itemStyle={{ fontFamily: 'Roboto_700bold' }}
                        >
                            <Picker.Item label="Início da jornada" value="inicio da jornada" />
                            <Picker.Item label="Início do intervalo" value="inicio da intervalo" />
                            <Picker.Item label="Fim do intervalo" value="fim do intervalo" />
                            <Picker.Item label="Término da jornada" value="Termino da jornada" />
                        </Picker>
                    </View>
                    <View style={styles.dateContainer}>
                        <View style={{flex: 1}}>
                            <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                                <Text style={styles.type}>Data:</Text>
                                <Text>07/12/2020</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.type}>Hora:</Text>
                                <Text>13:00</Text>
                            </View>
                        </View>
                        <BorderlessButton>
                            <Icon name="edit" size={24} color="#000" />
                        </BorderlessButton>
                    </View>

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
        height: 200,
        backgroundColor: theme.colors.white,
        marginTop: 40,
        borderRadius: theme.sizes.border,
        elevation: 2,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    typeRegister: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 20,
        borderBottomColor: theme.colors.border,
        borderBottomWidth: 1
    },
    type: {
        fontFamily: 'Roboto_900Black',
        color: theme.colors.secundary,
        fontSize: 16
    },
    picker: {
        color: theme.colors.black,
        fontSize: 18,
        flex: 1
    },
    dateContainer: {
        marginVertical: 10,
        flexDirection: 'row',
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    textField: {
        fontFamily: 'Roboto_700Bold',
        fi
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