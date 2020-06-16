import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const CounterScreen = () => {
    const [counter, setCounter] = useState(0)
    return (
        <View>
            <Button title="Increase" onPress={() => {
                setCounter(counter + 1)
            }} />
            <Text></Text>
            <Button title="Decrease" onPress={() => {
                setCounter(counter - 1)
            }} />
            <Text></Text>
            <Text style={styles.countText}>Current Count: {counter}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    countText: {
        fontSize: 25
    }
})

export default CounterScreen;