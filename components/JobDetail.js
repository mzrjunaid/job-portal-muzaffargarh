import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  ScrollView,
  Linking,
  Alert,
} from "react-native";
import { Image, Divider, FAB } from "@rneui/themed";

import Colors from "../constents/Colors";

const windowWidth = Dimensions.get("window").width;

const JobDetail = ({ selectedItem, isReview }) => {
  const sendWhatsApp = () => {
    let msg =
      "Job Title: *" +
      selectedItem.jobTitle +
      "*\n*Last Date:* " +
      selectedItem.lastDate +
      "\nWant to Apply for above job.";
    let phoneWithCountryCode = "923088213605";

    let mobile =
      Platform.OS == "ios" ? phoneWithCountryCode : "+" + phoneWithCountryCode;
    if (mobile) {
      if (msg) {
        let url = "whatsapp://send?text=" + msg + "&phone=" + mobile;
        Linking.openURL(url)
          .then()
          .catch(() => {
            alert("Make sure WhatsApp installed on your device");
          });
      } else {
        alert("Please insert message to send");
      }
    } else {
      alert("Please insert mobile no");
    }
  };

  const confirmation = () => {
    Alert.alert(
      "Send Whatsapp Message",
      "Kiya ap es job par Apply krna chahty hain?",
      [
        {
          text: "No",
          onPress: () => {},
          style: "cancel",
        },
        {
          text: "Yes",
          onPress: sendWhatsApp,
        },
      ]
    );
  };

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView>
        <View style={styles.container}>
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
        </View>
      </ScrollView>
      {!isReview && (
        <FAB
          visible={true}
          onPress={confirmation}
          placement="right"
          icon={{
            name: "whatsapp",
            type: "font-awesome",
            size: 24,
            color: "white",
          }}
          color={Colors.primary}
        />
      )}
    </SafeAreaView>
  );
};

export default JobDetail;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
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
