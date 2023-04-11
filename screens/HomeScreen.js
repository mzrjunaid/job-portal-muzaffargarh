import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { StyleSheet, View } from "react-native";
import JobList from "../components/JobList";

import { JOBS } from "../data/dummyData";

const HomeScreen = () => {
  return (
    <SafeAreaProvider>
      <View style={styles.screen}>
        <JobList listData={JOBS} />
      </View>
      <StatusBar style="light" />
    </SafeAreaProvider>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    padding: 10,
  },
});
