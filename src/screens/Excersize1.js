import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

const Excersize1 = () => {
    const name = "Tertius"

    return (
        <View>
            <Text style={styles.textStyle}>Getting started with react native</Text>
            <Text style={styles.subTextStyle}>My name is {name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    subTextStyle: {
        fontSize: 25,
        color: 'blue'
    }
})

export default Excersize1