import React from "react";
import { FlatList, View } from "react-native";
import JobItem from "./JobItem";
import { StyleSheet } from "react-native";

const JobList = ({ listData }) => {
  const renderJobItem = (itemData) => {
    return (
      <JobItem
        id={itemData.item.id}
        title={itemData.item.jobTitle}
        jobPlace={itemData.item.jobCities}
        publishDate={itemData.item.publishDate}
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
