import React from "react";
import { View, StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { useSelector } from "react-redux";

import JobList from "../../components/JobList";

const UpdateScreen = () => {
  const ads = useSelector((state) => state.jobs.availablejobs);
  return (
    <SafeAreaProvider>
      <View style={styles.screen}>
        <JobList listData={ads} purpose="update" />
      </View>
    </SafeAreaProvider>
  );
};

export default UpdateScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#f5f55",
    alignItems: "center",
    padding: 10,
  },
});
