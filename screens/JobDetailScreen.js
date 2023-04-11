import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { Image, Divider, Button } from "@rneui/themed";

const windowWidth = Dimensions.get("window").width;

import { JOBS } from "../data/dummyData";
import Colors from "../constents/Colors";

const JobDetailScreen = ({ route }) => {
  const { jobId } = route.params;
  const filtered = JOBS.filter((item) => item.id === jobId);
  const selectedItem = filtered[0];

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.screen}>
          <View style={[styles.titleContainer, styles.shadowDefined]}>
            <Text style={styles.title}>{selectedItem.jobTitle}</Text>
          </View>
          <View style={[styles.imageContainer, styles.shadowDefined]}>
            <Image style={styles.img} source={{ uri: selectedItem.imageUrl }} />
          </View>
          <View style={styles.datesContainer}>
            <View style={{ padding: 8 }}>
              <Text style={styles.textCenter}>Publish Date</Text>
              <Text
                style={[
                  styles.fontBold,
                  styles.textCenter,
                  { color: Colors.primary },
                ]}
              >
                {selectedItem.publishDate}
              </Text>
            </View>
            <Divider orientation="vertical" width={1} color="#fff" />
            <View style={{ padding: 8 }}>
              <Text style={styles.textCenter}>Last Date</Text>
              <Text
                style={[
                  styles.fontBold,
                  styles.textCenter,
                  { color: "#C00E0E" },
                ]}
              >
                {selectedItem.lastDate}
              </Text>
            </View>
          </View>
          <View style={[styles.descriptionContainer, styles.shadowDefined]}>
            <View style={styles.descColumn}>
              <Text style={styles.descText}>Job Type</Text>
              <Text style={styles.descText}>Vacancies</Text>
              <Text style={styles.descText}>Education</Text>
              <Text style={styles.descText}>Age Limit</Text>
              <Text style={styles.descText}>Gender</Text>
              <Text style={styles.descText}>Experience</Text>
              <Text style={styles.descText}>Domicile</Text>
            </View>
            <View style={styles.descColumn}>
              <Text style={styles.descText}>{selectedItem.jobType}</Text>
              <Text style={styles.descText}>{selectedItem.vacancies}</Text>
              <Text style={styles.descText}>{selectedItem.education}</Text>
              <Text style={styles.descText}>{selectedItem.ageLimit}</Text>
              <Text style={styles.descText}>{selectedItem.gender}</Text>
              <Text style={styles.descText}>{selectedItem.experience}</Text>
              <Text style={styles.descText}>{selectedItem.domicile}</Text>
            </View>
          </View>
          <Button
            title="APPLY ONLINE"
            icon={{
              name: "whatsapp",
              type: "font-awesome",
              size: 22,
              color: "white",
            }}
            iconRight
            iconContainerStyle={{ marginLeft: 10 }}
            titleStyle={{ fontWeight: "700" }}
            buttonStyle={[
              {
                backgroundColor: Colors.primary,
                borderColor: "transparent",
                borderWidth: 0,
                borderRadius: 8,
              },
            ]}
            containerStyle={{
              width: "100%",
              marginTop: 25,
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
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
    marginBottom: 20,
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
    marginBottom: 20,
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
    marginBottom: 20,
  },
  textCenter: {
    textAlign: "center",
  },
  fontBold: {
    fontWeight: "bold",
    fontSize: 16,
  },
  descriptionContainer: {
    width: windowWidth / 1.27,
    backgroundColor: "#fff",
    borderRadius: 6,
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  descText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "left",
    marginBottom: 10,
  },
});
