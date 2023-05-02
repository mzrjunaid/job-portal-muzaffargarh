import React, { useLayoutEffect } from "react";
import { View, StyleSheet } from "react-native";

import { Button } from "@rneui/themed";

import { useDispatch } from "react-redux";
import * as adsActions from "../../store/actions/ads";

import JobDetail from "../../components/JobDetail";

const DataReviewScreen = ({ route, navigation }) => {
  const { review } = route.params;
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Data Review",
    });
  }, [navigation]);

  const formSubmitHandler = async () => {
    try {
      await dispatch(
        adsActions.createAds(
          8,
          review.jobTitle,
          review.imageUrl,
          review.jobPlace,
          review.publishDate,
          review.lastDate,
          review.jobType,
          review.vacancies,
          review.education,
          review.ageLimit,
          review.gender,
          review.experience,
          review.domicile
        )
      );
    } catch (error) {
      console.log(error);
    }
    navigation.pop();
  };
  return (
    <View style={styles.screen}>
      <JobDetail selectedItem={review} isReview={true} />
      <Button
        title="PUBLISH"
        onPress={formSubmitHandler}
        titleStyle={{ fontWeight: "700", textTransform: "uppercase" }}
        buttonStyle={[
          {
            backgroundColor: Colors.primary,
            borderRadius: 0,
          },
        ]}
        containerStyle={{
          width: "100%",
          marginTop: 8,
        }}
      />
    </View>
  );
};

export default DataReviewScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
