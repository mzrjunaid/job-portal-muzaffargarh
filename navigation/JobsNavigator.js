import React from "react";
import { StyleSheet, Text, View } from "react-native";

const JobsNavigator = () => {
  return (
    <View style={styles.screen}>
      <Text>Jobs Navigator Screen</Text>
    </View>
  );
};

export default JobsNavigator;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});