import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';

const Register = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleRegister = () => {
        if (!username || !email || !phone) {
            Alert.alert('Error', 'All fields are required!');
            return;
        }

        const newUser = { username, email, phone };

        fetch('https://jsonhost.com/json/b35c499dd5ce6565f6170bd3544c46fa', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "yx39jdxgtjwgvobqdn06zzqp3mlpiyb9",
            },
            body: JSON.stringify(newUser),
        })
            .then((response) => {
                if (response.ok) {
                    Alert.alert('Success', 'You have registered successfully!');
                    navigation.navigate('Register');
                } else {
                    Alert.alert('Error', `Failed to register!`);
                }
            })
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Registration</Text>

            <TextInput
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholder="Phone Number"
                keyboardType="phone-pad"
                value={phone}
                onChangeText={setPhone}
            />

            <Button title="Register" onPress={handleRegister} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 15,
        borderRadius: 5,
    },
});

export default Register;
