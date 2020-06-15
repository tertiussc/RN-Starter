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
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
