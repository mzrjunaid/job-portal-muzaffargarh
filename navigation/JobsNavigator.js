import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/HomeScreen";
import Colors from "../constents/Colors";
import JobDetailScreen from "../screens/JobDetailScreen";

const Stack = createStackNavigator();

const JobsNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: "Job Portal Muzaffargarh",
          headerTitleAlign: "center",
          headerTintColor: Colors.primaryText,
          headerStyle: { backgroundColor: Colors.primary },
          headerMode: "screen",
        }}
      />
      <Stack.Screen
        name="JobDetail"
        component={JobDetailScreen}
        options={{
          headerTitle: "Job Detail",
          headerTitleAlign: "center",
          headerTintColor: Colors.primaryText,
          headerStyle: { backgroundColor: Colors.primary },
          headerMode: "screen",
        }}
      />
    </Stack.Navigator>
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
