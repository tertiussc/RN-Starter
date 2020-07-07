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
        title="Go to list Demo"
        onPress={() => navigation.navigate('List')}
      />
      <Text></Text>
      <Button
        title="Go to Image demo"
        onPress={() => navigation.navigate('Image')}
      />
      <Text></Text>
      <Button
        title="Go to Counter demo"
        onPress={() => navigation.navigate('Counter')}
      />
      <Text></Text>
      <Button
        title="Go to Color demo"
        onPress={() => navigation.navigate('Color')}
      />
      <Text></Text>
      <Button
        title="Go to Square demo"
        onPress={() => navigation.navigate('Square')}
      />
      <Text></Text>
      <Button
        title="Go to Text demo"
        onPress={() => navigation.navigate('Text')}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
