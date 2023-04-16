import React, { useEffect, useState } from "react";
import { useLayoutEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { Icon } from "@rneui/themed";
import { auth } from "../../firebase";

import { useDispatch, useSelector } from "react-redux";
import { loginSuccess, logout } from "../../store/actions/auth";

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
        <Text>{email}</Text>
      </View>
    </SafeAreaProvider>
  );
};

export default AdminScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
    alignItems: "center",
  },
});
