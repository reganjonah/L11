import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Confirmation = ({ route, navigation }) => {
    const { username } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.message}>Thank you, {username}, for registering!</Text>
            <Button title="Redirect to Register" onPress={() => navigation.navigate('Register')} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    message: {
        fontSize: 18,
        marginBottom: 20,
        textAlign: 'center',
    },
});

export default Confirmation;
