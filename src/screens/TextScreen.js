import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const TextScreen = () => {
    const [password, setPassword] = useState('')

    return (
        <View>
            <Text style={styles.text}>Enter Password</Text>
            <TextInput
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                value={password}
                onChangeText={(newValue) => setPassword(newValue)}
            />
            {/* <Text style={styles.text}>My name is {name}</Text> */}
            {password.length < 5 ? <Text style={styles.warning}>Password must be at least5 characters</Text> : null}
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        margin: 10,
        borderColor: 'black',
        borderWidth: 1,
        fontSize: 25
    },
    text: {
        fontSize: 25
    },
    warning: {
        color: 'red'
    }
})

export default TextScreen;