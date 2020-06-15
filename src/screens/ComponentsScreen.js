import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

const ComponentsScreen = () => {
    const greeting = "Hi there!!!"
    const name = 'Tertius'
    return (
        <View>
            <Text style={styles.textStyle}>This is the components screen</Text>
            <Text style={{ fontSize: 20 }}>{greeting} {name}</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    }
})

export default ComponentsScreen