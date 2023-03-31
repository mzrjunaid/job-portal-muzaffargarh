import React from "react";
import { Pressable, Text, View } from "react-native";

export const Button = () => {
  return (
    <Pressable onPress={() => console.log("Test")}>
      <View style={{ width: 150, height: 80 }}>
        <Text>Pressable Button</Text>
      </View>
    </Pressable>
  );
};
