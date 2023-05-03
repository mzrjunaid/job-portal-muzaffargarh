import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { StyleSheet, View } from "react-native";
import JobList from "../components/JobList";

import { useLayoutEffect } from "react";
import { Icon } from "@rneui/themed";
import Colors from "../constents/Colors";
import { useSelector } from "react-redux";

const HomeScreen = ({ navigation }) => {
  const ads = useSelector((state) => state.jobs.availablejobs);

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
    });
  }, [navigation]);

  return (
    <SafeAreaProvider>
      <View style={styles.screen}>
        <JobList listData={ads} purpose="JobDetail" />
      </View>
      <StatusBar style="light" />
    </SafeAreaProvider>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#f5f55",
    alignItems: "center",
    padding: 10,
  },
});
