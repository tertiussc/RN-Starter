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
      <View style={styles.space} />
      <Button
        title="Go to list Demo"
        onPress={() => navigation.navigate('List')}
      />
      <View style={styles.space} />
      <Button
        title="Go to Image demo"
        onPress={() => navigation.navigate('Image')}
      />
      <View style={styles.space} />
      <Button
        title="Go to Counter demo"
        onPress={() => navigation.navigate('Counter')}
      />
      <View style={styles.space} />
      <Button
        title="Go to Color demo"
        onPress={() => navigation.navigate('Color')}
      />
      <View style={styles.space} />
      <Button
        title="Go to Square demo"
        onPress={() => navigation.navigate('Square')}
      />
      <View style={styles.space} />
      <Button
        title="Go to Text demo"
        onPress={() => navigation.navigate('Text')}
      />
      <View style={styles.space} />
      <Button
        title="Go to Box demo"
        onPress={() => navigation.navigate('Box')}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  space: {
    marginBottom: 3,
  }
});

export default HomeScreen;