import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
  createDrawerNavigator,
} from "@react-navigation/drawer";

import HomeScreen from "../screens/HomeScreen";
import Colors from "../constents/Colors";
import JobDetailScreen from "../screens/JobDetailScreen";
import AdminScreen from "../screens/admin/AdminScreen";
import LoginScreen from "../screens/login/LoginScreen";
import { useSelector } from "react-redux";
import { View } from "react-native";
import { Text } from "react-native";
import { Icon, Image } from "@rneui/themed";
import DataEntryScreen from "../screens/admin/DataEntryScreen";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const defaultHeader = {
  headerTitleAlign: "center",
  headerTintColor: Colors.primaryText,
  headerStyle: { backgroundColor: Colors.primary },
  headerMode: "screen",
};

const PublicNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={defaultHeader}
      />
      <Stack.Screen
        name="JobDetail"
        component={JobDetailScreen}
        options={defaultHeader}
      />
    </Stack.Navigator>
  );
};

const AdminNavigator = () => {
  const userLogin = useSelector((state) => state.auth.isLogin);
  return (
    <Stack.Navigator initialRouteName="Login">
      {userLogin ? (
        <Stack.Group>
          <Stack.Screen
            name="admin"
            component={AdminScreen}
            // initialParams={{ userLogin: UserSignIn }}
            options={defaultHeader}
          />
          <Stack.Screen
            name="dataEntry"
            component={DataEntryScreen}
            options={defaultHeader}
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

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View
        style={{
          width: "100%",
          height: 150,
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
          marginBottom: 25,
        }}
      >
        <Image
          source={{
            uri: "https://scontent.fmux2-1.fna.fbcdn.net/v/t39.30808-6/333866722_768306837751481_5923538024716501431_n.jpg?stp=dst-jpg_p552x414&_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHWPDhuIXr4U9YEyQyYBOBip_sqvH3Yuv-n-yq8fdi6_6B8VUg7kdzAdh_Yhcpitj1tkkEOQC6g53sSBMTcShsF&_nc_ohc=OpJVKjFLvE4AX9xFzjZ&_nc_ht=scontent.fmux2-1.fna&oh=00_AfCygbQHoFhIRBT9OxzErFpjhU9AdIKrh6vziiuEsvcWrw&oe=64366C63",
          }}
          style={{ width: 150, height: 150 }}
        />
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

const JobsNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="HomeScreen"
        component={PublicNavigator}
        options={{
          title: "Home Page",
          headerTitleAlign: "center",
          headerTintColor: Colors.primaryText,
          headerStyle: { backgroundColor: Colors.primary },
        }}
      />
      <Drawer.Screen
        name="AdminScreen"
        component={AdminNavigator}
        options={{
          title: "Admin",
        }}
      />
    </Drawer.Navigator>
  );
};

export default JobsNavigator;
