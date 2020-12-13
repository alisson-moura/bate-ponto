import React, { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import Constants from 'expo-constants';
import Icon from '@expo/vector-icons/MaterialIcons';
import { View, StyleSheet, Text, TextInput, Dimensions, SafeAreaView, ScrollView, } from 'react-native';
import Button from '../components/Button';
import * as theme from '../theme';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export default function Register() {
    const navigation = useNavigation();

    const [sundaySelected, setSundaySelected] = useState(false);
    const [mondaySelected, setMondaySelected] = useState(false);
    const [tuesdaySelected, setTuesSelected] = useState(false);
    const [wednesdaySelected, setWednesdaySelected] = useState(false);
    const [thursdaySelected, setThursdaySelected] = useState(false);
    const [fridaySelected, setFridaySelected] = useState(false);
    const [saturdaySelected, setSaturdaySelected] = useState(false);

    const [startWorking, setStartWorking] = useState('07:00');
    const [stopWorking, setStopWorking] = useState('17:00');
    const [startInterval, setStartInterval] = useState('12:00');
    const [stopInterval, setStopInterval] = useState('13:00');

    const [hour, setHour] = useState(new Date());
    const [mode, setMode] = useState('time');
    const [showStartWorking, setShowStartWorking] = useState(false);
    const [showStopWorking, setShowStopWorking] = useState(false);
    const [showStartInterval, setShowStartInterval] = useState(false);
    const [showStopInterval, setShowStopInterval] = useState(false);

    function handleStartWorking(event, selectedHour) {
        setShowStartWorking(false);

        if (event.type === 'dismissed') {
            setStartWorking(startWorking);
            return;
        }

        const currentHour = selectedHour || hour;
        let h = formatHour(currentHour.getUTCHours() - 3, currentHour.getUTCMinutes());
        setStartWorking(h);
    }

    function handleStopWorking(event, selectedHour) {
        setShowStopWorking(false);
        if (event.type === 'dismissed') {
            setStopWorking(stopWorking);
            return;
        }

        const currentHour = selectedHour || hour;
        let h = formatHour(currentHour.getUTCHours() - 3, currentHour.getUTCMinutes());
        setStopWorking(h)
    }

    function handleStartInterval(event, selectedHour) {
        setShowStartInterval(false);
        if (event.type === 'dismissed') {
            setStartInterval(startInterval)
            return;
        }
        const currentHour = selectedHour || hour;

        let h = formatHour(currentHour.getUTCHours() - 3, currentHour.getUTCMinutes());
        setStartInterval(h)
    }

    function handleStopInterval(event, selectedHour) {
        setShowStopInterval(false);
        if (event.type === 'dismissed') {
            setStopInterval(stopInterval);
            return;
        }
        const currentHour = selectedHour || hour;

        let h = formatHour(currentHour.getUTCHours() - 3, currentHour.getUTCMinutes());
        setStopInterval(h)
    }


    function formatHour(hours, minutes) {
        if (hours < 10) {
            hours = `0${hours}`;
        }
        if (minutes < 10) {
            minutes = `0${minutes}`;
        }
        return `${hours}:${minutes}`
    }


    return (

        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.content}>
                <View style={styles.containerTitle}>
                    <Text style={styles.title}>Seus dados</Text>
                </View>
                <View style={styles.field}>
                    <Text style={styles.textField}>Seu nome</Text>
                    <TextInput style={styles.inputField} autoCapitalize='words' />
                </View>
                <View style={styles.field}>
                    <Text style={styles.textField}>Empresa onde Trabalha</Text>
                    <TextInput style={styles.inputField} autoCapitalize='words' />
                </View>
                <View style={styles.field}>
                    <Text style={styles.textField}>Cargo</Text>
                    <TextInput style={styles.inputField} autoCapitalize='words' />
                </View>

                <View style={{ ...styles.containerTitle, marginTop: 20 }}>
                    <Text style={styles.title}>Jornada</Text>
                </View>
                <View style={styles.containerHours}>

                    <View style={styles.hoursDetail}>
                        <Text style={styles.hoursDetailField}>Inícia às:</Text>
                        <Text style={styles.hoursDetailText}>{startWorking}</Text>
                        <BorderlessButton onPress={() => { setShowStartWorking(true) }}>
                            <Icon name="schedule" size={24} color={theme.colors.black} />
                        </BorderlessButton>
                        {showStartWorking && (
                            <DateTimePicker
                                testID="dateTimePicker"
                                value={hour}
                                mode={mode}
                                is24Hour={true}
                                display="default"
                                onChange={handleStartWorking}
                            />
                        )}

                    </View>
                    <View style={styles.hoursDetail}>
                        <Text style={styles.hoursDetailField}>Termina às:</Text>
                        <Text style={styles.hoursDetailText}>{stopWorking}</Text>
                        <BorderlessButton onPress={() => { setShowStopWorking(true) }}>
                            <Icon name="schedule" size={24} color={theme.colors.black} />
                        </BorderlessButton>
                        {showStopWorking && (
                            <DateTimePicker
                                testID="dateTimePicker"
                                value={hour}
                                mode={mode}
                                is24Hour={true}
                                display="default"
                                onChange={handleStopWorking}
                            />
                        )}
                    </View>
                </View>

                <View style={{ ...styles.containerTitle, marginTop: 16 }}>
                    <Text style={{ ...styles.title, fontSize: 20 }}>Intervalo</Text>
                </View>
                <View style={styles.containerHours}>
                    <View style={styles.hoursDetail}>
                        <Text style={styles.hoursDetailField}>Inícia às:</Text>
                        <Text style={styles.hoursDetailText}>{startInterval}</Text>
                        <BorderlessButton onPress={() => { setShowStartInterval(true) }}>
                            <Icon name="schedule" size={24} color={theme.colors.black} />
                        </BorderlessButton>
                        {showStartInterval && (
                            <DateTimePicker
                                testID="dateTimePicker"
                                value={hour}
                                mode={mode}
                                is24Hour={true}
                                display="default"
                                onChange={handleStartInterval}
                            />
                        )}
                    </View>
                    <View style={styles.hoursDetail}>
                        <Text style={styles.hoursDetailField}>Termina às:</Text>
                        <Text style={styles.hoursDetailText}>{stopInterval}</Text>
                        <BorderlessButton onPress={() => { setShowStopInterval(true) }}>
                            <Icon name="schedule" size={24} color={theme.colors.black} />
                        </BorderlessButton>
                        {showStopInterval && (
                            <DateTimePicker
                                testID="dateTimePicker"
                                value={hour}
                                mode={mode}
                                is24Hour={true}
                                display="default"
                                onChange={handleStopInterval}
                            />
                        )}
                    </View>
                </View>

                <View style={{ ...styles.containerTitle, marginTop: 16 }}>
                    <Text style={{ ...styles.title, fontSize: 20 }}>Dias da semana</Text>
                </View>
                <View style={styles.daysOfWeek}>
                    <RectButton onPress={() => {
                        setSundaySelected(!sundaySelected);
                    }} style={sundaySelected ? styles.dayButtonSelected : styles.dayButton}>
                        <Text style={sundaySelected ? styles.dayTextSelected : styles.dayText}>D</Text>
                    </RectButton>

                    <RectButton onPress={() => {
                        setMondaySelected(!mondaySelected);
                    }} style={mondaySelected ? styles.dayButtonSelected : styles.dayButton}>
                        <Text style={mondaySelected ? styles.dayTextSelected : styles.dayText}>S</Text>
                    </RectButton>

                    <RectButton onPress={() => {
                        setTuesSelected(!tuesdaySelected);
                    }} style={tuesdaySelected ? styles.dayButtonSelected : styles.dayButton}>
                        <Text style={tuesdaySelected ? styles.dayTextSelected : styles.dayText}>T</Text>
                    </RectButton>

                    <RectButton onPress={() => {
                        setWednesdaySelected(!wednesdaySelected);
                    }} style={wednesdaySelected ? styles.dayButtonSelected : styles.dayButton}>
                        <Text style={wednesdaySelected ? styles.dayTextSelected : styles.dayText}>Q</Text>
                    </RectButton>

                    <RectButton onPress={() => {
                        setThursdaySelected(!thursdaySelected);
                    }} style={thursdaySelected ? styles.dayButtonSelected : styles.dayButton}>
                        <Text style={thursdaySelected ? styles.dayTextSelected : styles.dayText}>Q</Text>
                    </RectButton>

                    <RectButton onPress={() => {
                        setFridaySelected(!fridaySelected);
                    }} style={fridaySelected ? styles.dayButtonSelected : styles.dayButton}>
                        <Text style={fridaySelected ? styles.dayTextSelected : styles.dayText}>S</Text>
                    </RectButton>

                    <RectButton onPress={() => {
                        setSaturdaySelected(!saturdaySelected);
                    }} style={saturdaySelected ? styles.dayButtonSelected : styles.dayButton}>
                        <Text style={saturdaySelected ? styles.dayTextSelected : styles.dayText}>D</Text>
                    </RectButton>

                </View>
                <View style={{marginBottom: 16}}>
                    <Button icon="arrow-forward" onPress={() => { navigation.navigate('ConfirmProfile') }}>Próximo</Button>
                </View>
            </ScrollView>
        </SafeAreaView>
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
        marginVertical: 12,
    },
    containerTitle: {
        borderBottomColor: theme.colors.border,
        borderBottomWidth: 2,
        marginBottom: 18,
    },
    title: {
        color: theme.colors.blueFont,
        fontSize: theme.sizes.h2,
        fontFamily: 'Roboto_900Black',
        marginBottom: 6
    },
    field: {
        marginBottom: 16,
    },
    textField: {
        color: theme.colors.secundary,
        fontSize: theme.sizes.title,
        fontFamily: 'Roboto_700Bold',
        marginBottom: 8,
    },
    inputField: {
        borderBottomWidth: 2,
        borderColor: theme.colors.secundary,
        height: 36,
        color: theme.colors.black,
        fontFamily: 'Roboto_500Medium',
        fontSize: 18
    },
    containerHours: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    hoursDetail: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    hoursDetailText: {
        fontSize: theme.sizes.title,
        color: theme.colors.black,
        fontFamily: 'Roboto_500Medium',
        marginLeft: 10,
        marginRight: 10,
    },
    hoursDetailField: {
        fontSize: theme.sizes.title,
        fontFamily: 'Roboto_500Medium',
        color: theme.colors.secundary,
    },
    daysOfWeek: {
        flexDirection: 'row',
        marginBottom: 80,
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
    }
});