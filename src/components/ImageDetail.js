import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';

const ImageDetail = ({ imgScore, imgSource, title }) => {
    return (
        <View>
            <Image source={imgSource} />
            <Text style={styles.compText}>{title}</Text>
            <Text style={styles.compText}>Rating {imgScore}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    compText: {
        fontSize: 25
    }
})

export default ImageDetail;