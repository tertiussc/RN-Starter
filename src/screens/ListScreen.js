import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'

const ListScreen = () => {

    const friends = [
        { name: 'Friend#1 ', age: 22 },
        { name: 'Friend#2 ', age: 25 },
        { name: 'Friend#3 ', age: 28 },
        { name: 'Friend#4 ', age: 31 },
        { name: 'Friend#5 ', age: 21 },
        { name: 'Friend#6 ', age: 19 },
        { name: 'Friend#7 ', age: 35 },
        { name: 'Friend#8 ', age: 41 },
        { name: 'Friend#9 ', age: 40 }
    ]
    return (
        <FlatList
            horizontal={false}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(friend) => friend.name}
            data={friends}
            renderItem={({ item }) => {
                return <Text style={styles.textStyle}>My good firend {item.name} is {item.age} years old</Text>
            }}
        ></FlatList>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,
        marginVertical: 50

    }
})

export default ListScreen