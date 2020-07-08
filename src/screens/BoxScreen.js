import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textOneStyle}>Child #1</Text>
            <Text style={styles.textTwoStyle}>Child #2</Text>
            <Text style={styles.textThreeStyle}>Child #3</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        height: 200,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textOneStyle: {
        height: 50,
        width: 50,
        backgroundColor: 'red',
        flex: 1,
        marginRight: 10,
        color: 'white',
        fontSize: 20
    },
    textTwoStyle: {
        height: 50,
        width: 50,
        backgroundColor: 'green',
        flex: 1,
        marginHorizontal: 5,
        top: 50,
        // alignSelf: 'flex-end',
        // marginTop: 50,
        color: 'white',
        fontSize: 20
    },
    textThreeStyle: {
        height: 50,
        width: 50,
        backgroundColor: 'blue',
        flex: 1,
        marginLeft: 10,
        color: 'white',
        fontSize: 20
    },
})
export default BoxScreen;