import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageDetail from '../components/ImageDetail'

const ImageScreen = () => {
    return (
        <View>
            <ImageDetail title="Forest" imgSource={require('../../assets/forest.jpg')} imgScore="****" />
            <ImageDetail title="Beach" imgSource={require('../../assets/beach.jpg')} imgScore="**" />
            <ImageDetail title="Mountain" imgSource={require('../../assets/mountain.jpg')} imgScore="***" />
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 30
    }
})

export default ImageScreen;