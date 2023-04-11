import React from "react";
import { ListItem } from "@rneui/themed";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../constents/Colors";
import { useNavigation } from "@react-navigation/native";

const JobItem = (props) => {
  const navigation = useNavigation();
  return (
    <View style={styles.jobItem}>
      <ListItem
        onPress={() => {
          navigation.navigate("JobDetail", { jobId: props.id });
        }}
      >
        <ListItem.Content>
          <ListItem.Title
            style={styles.jobTitle}
            ellipsizeMode="tail"
            numberOfLines={1}
          >
            {props.title}
          </ListItem.Title>
          <ListItem.Subtitle style={styles.jobSubtitle}>
            <Text>{props.jobPlace}</Text>
            <Text
              style={{
                fontWeight: "900",
                fontSize: 20,
                color: Colors.accent,
              }}
            >
              {" "}
              |{" "}
            </Text>
            <Text style={styles.publishDate}>{props.publishDate}</Text>
          </ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron color={Colors.primary} size={28} />
      </ListItem>
    </View>
  );
};

const styles = StyleSheet.create({
  jobItem: {
    flex: 1,
    width: "100%",
    marginBottom: 10,
    borderColor: Colors.primary,
    borderRadius: 6,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.35,
    shadowRadius: 6,
    elevation: 3,
  },
  jobTitle: {
    color: Colors.primary,
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  jobSubtitle: {
    color: Colors.accentText,
    fontWeight: "bold",
    fontSize: 16,
    width: "100%",
  },
  publishDate: {
    color: Colors.primary,
  },
});

export default JobItem;
