import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {

  return (
    <View>
      <Text style={styles.text}>HomeScreen Working</Text>
      <Button
        title="Got to Components Demo"
        onPress={() => navigation.navigate('Components')}
      />
      <Text></Text>
      <Button
        title="Go list Demo"
        onPress={() => navigation.navigate('List')}
      />
      <Text></Text>
      <Button
        title="Go to Image Screen demo"
        onPress={() => navigation.navigate('ImageScreen')}
      />
      <Text></Text>
      <Button
        title="Go to Counter Screen demo"
        onPress={() => navigation.navigate('Counter')}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
