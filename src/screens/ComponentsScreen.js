import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

const ComponentsScreen = () => {
    const greeting = "Hi there!!!"
    const bye = <Text>See you later!</Text>
    return (
        <View>
            <Text style={styles.textStyle}>This is the components screen</Text>
            <Text style={{ fontSize: 20 }}>{greeting}</Text>
            {bye}
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    }
})

export default ComponentsScreen