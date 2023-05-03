import React from "react";
import { StyleSheet, FlatList, View } from "react-native";
import JobItem from "./JobItem";

const JobList = ({ listData, purpose }) => {
  const renderJobItem = (itemData) => {
    return (
      <JobItem
        id={itemData.item.id}
        title={itemData.item.jobTitle}
        jobPlace={itemData.item.jobPlace}
        publishDate={itemData.item.publishDate}
        purpose={purpose}
      />
    );
  };
  return (
    <View style={styles.list}>
      <FlatList
        data={listData}
        keyExtractor={(item, index) => item.id}
        renderItem={renderJobItem}
        style={{ width: "100%" }}
      />
    </View>
  );
};

export default JobList;

const styles = StyleSheet.create({
  list: {
    flex: 1,
    alignItems: "center",
    width: "100%",
  },
});
