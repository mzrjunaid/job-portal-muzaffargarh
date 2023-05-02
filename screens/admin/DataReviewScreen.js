import React from "react";
import { View, StyleSheet } from "react-native";

import { Button } from "@rneui/themed";

import { useDispatch } from "react-redux";
import * as adsActions from "../../store/actions/ads";

import JobDetail from "../../components/JobDetail";

const DataReviewScreen = ({ route }) => {
  const { review } = route.params;

  console.log(review);

  const dispatch = useDispatch();

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
        titleStyle={{ fontWeight: "700" }}
        buttonStyle={[
          {
            backgroundColor: Colors.primary,
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
