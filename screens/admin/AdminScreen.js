import React from "react";
import { useLayoutEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { Icon } from "@rneui/themed";

const AdminScreen = ({ navigation }) => {
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
          onPress={() => {}}
          color={Colors.primaryText}
          style={{ marginRight: 20 }}
        />
      ),
    });
  }, [navigation]);
  return (
    <SafeAreaProvider>
      <View style={styles.screen}>
        <Text>Admin Screen</Text>
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
