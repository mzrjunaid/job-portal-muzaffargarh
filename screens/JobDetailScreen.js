import React from "react";
import { View, Text, StyleSheet, Dimensions, ScrollView } from "react-native";
import { Image, Divider } from "@rneui/themed";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

import { JOBS } from "../data/dummyData";
import Colors from "../constents/Colors";

const JobDetailScreen = ({ route }) => {
  const { jobId } = route.params;
  const filtered = JOBS.filter((item) => item.id === jobId);
  const selectedItem = filtered[0];

  return (
    <ScrollView>
      <View style={styles.screen}>
        <View style={[styles.titleContainer, styles.shadowDefined]}>
          <Text style={styles.title}>{selectedItem.jobTitle}</Text>
        </View>
        <View style={[styles.imageContainer, styles.shadowDefined]}>
          <Image style={styles.img} source={{ uri: selectedItem.imageUrl }} />
        </View>
        <View style={styles.datesContainer}>
          <View style={{padding: 8}}>
            <Text>Publish Date</Text>
            <Text>{selectedItem.publishDate}</Text>
          </View>
          <Divider orientation="vertical" width={1} color="#fff" />
          <View style={{padding: 8}}>
            <Text>Last Date</Text>
            <Text>{selectedItem.lastDate}</Text>
          </View>
        </View>
        <View>
          <View>
            <Text>Job Type</Text>
            <Text>Full Time / Permanent</Text>
          </View>
          <View>
            <Text>Vacancies</Text>
            <Text>25</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default JobDetailScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: 10,
    padding: 16,
    alignItems: "center",
  },
  shadowDefined: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.35,
    shadowRadius: 6,
    elevation: 3,
  },

  titleContainer: {
    backgroundColor: "#fff",
    padding: 8,
    marginBottom: 10,
    borderRadius: 6,
    width: "100%",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textDecorationLine: "underline",
    color: Colors.primary,
    textAlign: "center",
  },
  imageContainer: {
    overflow: "hidden",
    width: "100%",
    height: windowWidth / 1.53,
    borderRadius: 6,
    marginBottom: 10,
  },
  img: {
    width: "100%",
    height: "100%",
  },
  datesContainer: {
    flexDirection: "row",
    width: "100%",
    backgroundColor: Colors.accent,
    justifyContent: "space-evenly",
  },
});
