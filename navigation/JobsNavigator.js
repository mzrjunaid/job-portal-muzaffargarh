import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import HomeScreen from "../screens/HomeScreen";
import Colors from "../constents/Colors";
import JobDetailScreen from "../screens/JobDetailScreen";
import AdminScreen from "../screens/admin/AdminScreen";
import LoginScreen from "../screens/login/LoginScreen";
import { useState } from "react";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const PublicNavigator = () => {
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

const AdminNavigator = () => {
  const isSignedIn = false;
  return (
    <Stack.Navigator>
      {isSignedIn ? (
        <Stack.Group>
          <Stack.Screen
            name="admin"
            component={AdminScreen}
            // initialParams={{ userLogin: UserSignIn }}
            options={{
              headerTitle: "Admin Page",
              headerTitleAlign: "center",
              headerTintColor: Colors.primaryText,
              headerStyle: { backgroundColor: Colors.primary },
              headerMode: "screen",
            }}
          />
        </Stack.Group>
      ) : (
        <Stack.Group screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            // initialParams={{ userLogin: UserSignIn }}
          />
        </Stack.Group>
      )}
    </Stack.Navigator>
  );
};

const JobsNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen
        name="HomeScreen"
        component={PublicNavigator}
        options={{
          headerTitle: "Job Portal Muzaffargarh",
          headerTitleAlign: "center",
          headerTintColor: Colors.primaryText,
          headerStyle: { backgroundColor: Colors.primary },
        }}
      />
      <Drawer.Screen name="AdminScreen" component={AdminNavigator} />
    </Drawer.Navigator>
  );
};

export default JobsNavigator;
