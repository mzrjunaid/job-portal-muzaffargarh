import React, { useEffect, useState } from "react";
import { useLayoutEffect } from "react";
import { StyleSheet, View, Text } from "react-native";

import { auth } from "../../firebase";

import { useDispatch, useSelector } from "react-redux";
import { loginSuccess, logout } from "../../store/actions/auth";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native";
import { Pressable } from "react-native";
import { Dimensions } from "react-native";
import { Icon, ListItem } from "@rneui/themed";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Colors from "../../constents/Colors";
import { Platform } from "react-native";
import DataEntryScreen from "./DataEntryScreen";

const screenWidth = Dimensions.get("screen").width;

const AdminScreen = ({ navigation }) => {
  const user = useSelector((state) => state.auth.user);
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      setEmail(user.email);
    }

    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(loginSuccess(user));
      } else {
        dispatch(logout());
      }
    });

    return () => unsubscribe();
  }, [dispatch, user]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: email,
    });
  }, [navigation, email]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Icon
          name="menu"
          size={28}
          onPress={() => {
            navigation.toggleDrawer();
          }}
          color={Colors.primaryText}
          style={{ marginLeft: 20 }}
        />
      ),
      headerRight: () => (
        <Icon
          name="logout"
          size={28}
          onPress={() => {
            auth.signOut();
          }}
          color={Colors.primaryText}
          style={{ marginRight: 20 }}
        />
      ),
    });
  }, [navigation]);
  return (
    <SafeAreaProvider>
      <View style={styles.screen}>
        <ScrollView style={styles.container}>
          <View style={styles.list}>
            <ListItem
              onPress={() => {
                navigation.navigate("dataEntry");
              }}
              style={styles.button}
            >
              <ListItem.Content>
                <ListItem.Title
                  style={styles.jobTitle}
                  ellipsizeMode="tail"
                  numberOfLines={1}
                >
                  Add New Advertisement
                </ListItem.Title>
              </ListItem.Content>
              <ListItem.Chevron color={Colors.primary} size={28} />
            </ListItem>
            <ListItem onPress={() => {}} style={styles.button}>
              <ListItem.Content>
                <ListItem.Title
                  style={styles.jobTitle}
                  ellipsizeMode="tail"
                  numberOfLines={1}
                >
                  Add New Advertisement
                </ListItem.Title>
              </ListItem.Content>
              <ListItem.Chevron color={Colors.primary} size={28} />
            </ListItem>
          </View>
        </ScrollView>
      </View>
    </SafeAreaProvider>
  );
};

export default AdminScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: Colors.background,
    padding: 10,
  },
  list: {
    flex: 1,
    alignItems: "center",
  },
  button: {
    flex: 1,
    width: "100%",
    marginBottom: 10,
    borderColor: Colors.primary,
    borderRadius: 6,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.35,
    shadowRadius: 6,
    elevation: 3,
  },
  jobTitle: {
    color: Colors.primary,
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
});
