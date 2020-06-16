import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ImageDetail = ({ imgScore, imgSource, title }) => {
    return (
        <View>
            <Image source={imgSource} />
            <Text style={styles.compText}>{title}</Text>
            <Text style={styles.compText}>Image Rating {imgScore}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    compText: {
        fontSize: 30
    }
})

export default ImageDetail;