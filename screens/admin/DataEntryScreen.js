import { Button, Image, Input } from "@rneui/themed";
import React, { useLayoutEffect, useState, useRef } from "react";
import {
  KeyboardAvoidingView,
  View,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
} from "react-native";

import { useCallback } from "react";
import { useDispatch } from "react-redux";
import * as adsActions from "../../store/actions/ads";

import Colors from "../../constents/Colors";

import DropdownButton from "../../components/DropdownButton";
import DatePicker from "../../components/DatePicker";
import ImagePickerButton from "../../components/ImagePicker";

const data = [
  { label: "Item 1", value: "1" },
  { label: "Item 2", value: "2" },
  { label: "Item 3", value: "3" },
  { label: "Item 4", value: "4" },
  { label: "Item 5", value: "5" },
  { label: "Item 6", value: "6" },
  { label: "Item 7", value: "7" },
  { label: "Item 8", value: "8" },
];

const DataEntryScreen = ({ navigation }) => {
  const [formError, setFormError] = useState(false);

  const [title, setTitle] = useState("");
  const [titleError, setTitleError] = useState("");

  const [vacancies, setVacancies] = useState("");
  const [vacanciesError, setVacanciesError] = useState("");

  const [jobPlace, setJobPlace] = useState("");
  const [jobType, setJobType] = useState("");
  const [education, setEducation] = useState("");
  const [experience, setExperience] = useState("");
  const [gender, setGender] = useState("");
  const [ageLimit, setAgeLimit] = useState("");
  const [domicile, setDomicile] = useState("");

  const [publishDate, setPublishDate] = useState(new Date());
  const [lastDate, setLastDate] = useState(new Date());

  const [imageUrl, setImageUrl] = useState("");

  const [show, setShow] = useState(false);

  const input_1 = useRef(null);
  const input_2 = useRef(null);

  const dispatch = useDispatch();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "New Advertisement",
    });
  }, [navigation]);

  const jobPlaceHandler = (value) => {
    setJobPlace(value);
  };

  const jobTypeHandler = (value) => {
    setJobType(value);
  };

  const educationHandler = (value) => {
    setEducation(value);
  };

  const experienceHandler = (value) => {
    setExperience(value);
  };

  const genderHandler = (value) => {
    setGender(value);
  };

  const ageLimitHandler = (value) => {
    setAgeLimit(value);
  };

  const domicileHandler = (value) => {
    setDomicile(value);
  };

  const getPublishDate = (date) => {
    setPublishDate(date);
  };

  const getLastDate = (date) => {
    setLastDate(date);
  };

  const titleValidation = () => {
    if (title.length === 0) {
      setTitleError("Title Cannot be blank");
      setFormError(true);
    } else {
      setTitleError("");
      setFormError(false);
    }
  };

  const vacancyValidation = () => {
    if (vacancies <= 0) {
      setVacanciesError("Vacancies Cannot be less than 0");
      setFormError(true);
    } else {
      setVacanciesError("");
      setFormError(false);
    }
  };

  const pickedImageHandler = (imageUrl) => {
    const imgUri = imageUrl.assets[0].uri;
    setImageUrl(imgUri);
  };

  const formSubmitHandler = async () => {
    options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const formData = {
      title: title,
      vacancies: vacancies,
      jobPlace: jobPlace,
      jobType: jobType,
      education: education,
      experience: experience,
      gender: gender,
      ageLimit: ageLimit,
      domicile: domicile,
      publishDate: publishDate.toLocaleDateString("en-GB", options),
      lastDate: lastDate.toLocaleDateString("en-GB", options),
      imageUrl: imageUrl,
    };

    console.log(formData);

    try {
      await dispatch(
        adsActions.createAds(
          7,
          formData.title,
          formData.imageUrl,
          formData.jobPlace,
          formData.publishDate,
          formData.lastDate,
          formData.jobType,
          formData.vacancies,
          formData.education,
          formData.ageLimit,
          formData.gender,
          formData.experience,
          formData.domicile
        )
      );
    } catch (error) {
      console.log(error);
    }
  };

  //   options = {
  //     weekday: "long",
  //     year: "numeric",
  //     month: "long",
  //     day: "numeric",
  //   };
  //   const formData = {
  //     title: title,
  //     vacancies: vacancies,
  //     jobPlace: jobPlace,
  //     jobType: jobType,
  //     education: education,
  //     experience: experience,
  //     gender: gender,
  //     ageLimit: ageLimit,
  //     domicile: domicile,
  //     publishDate: publishDate.toLocaleDateString("en-GB", options),
  //     lastDate: lastDate.toLocaleDateString("en-GB", options),
  //     imageUrl: imageUrl,
  //   };

  //   const addJob = new Jobs(
  //     formData.title,
  //     formData.imageUrl,
  //     formData.jobPlace,
  //     formData.publishDate,
  //     formData.lastDate,
  //     formData.jobType,
  //     formData.vacancies,
  //     formData.education,
  //     formData.ageLimit,
  //     formData.gender,
  //     formData.experience,
  //     formData.domicile
  //   );

  //   console.log(addJob);

  //   // return (
  //   //   <View style={[styles.form, { marginTop: 20 }]}>
  //   //     <Text>Review</Text>
  //   //     <Text>{formData.title}</Text>
  //   //     <Text>{formData.vacancies}</Text>
  //   //     <Text>{formData.jobPlace}</Text>
  //   //     <Text>{formData.jobType}</Text>
  //   //     <Text>{formData.education}</Text>
  //   //     <Text>{formData.experience}</Text>
  //   //     <Text>{formData.gender}</Text>
  //   //     <Text>{formData.ageLimit}</Text>
  //   //     <Text>{formData.domicile}</Text>
  //   //     <Text>{formData.publishDate}</Text>
  //   //     <Text>{formData.lastDate}</Text>
  //   //     {formData.imageUrl && (
  //   //       <Image
  //   //         source={{ uri: formData.imageUrl }}
  //   //         style={{ width: "100%", height: 300 }}
  //   //       />
  //   //     )}
  //   //   </View>
  //   // );
  // });

  return (
    <KeyboardAvoidingView style={styles.screen} behavior="height">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.form}>
              <Input
                ref={input_1}
                required
                onFocus={() => {}}
                onBlur={() => {}}
                label="Advertisement Title"
                labelStyle={{ color: Colors.primary }}
                inputStyle={{ paddingHorizontal: 8 }}
                inputContainerStyle={styles.inputStyle}
                placeholder="Enter text here..."
                keyboardType="default"
                autoCapitalize="sentences"
                onChangeText={(value) => setTitle(value)}
                onEndEditing={titleValidation}
                onSubmitEditing={() => {
                  input_2.current.focus();
                }}
                errorMessage={titleError}
                value={title}
              />
              <Input
                ref={input_2}
                required
                onFocus={() => {}}
                onBlur={() => {}}
                label="No of vacancies"
                labelStyle={{ color: Colors.primary }}
                inputStyle={{ paddingHorizontal: 8 }}
                inputContainerStyle={styles.inputStyle}
                placeholder="Enter text here..."
                keyboardType="number-pad"
                autoCapitalize="none"
                onChangeText={(value) => setVacancies(value)}
                onEndEditing={vacancyValidation}
                errorMessage={vacanciesError}
                value={vacancies}
              />
              <DropdownButton
                dropdownData={data}
                dropdownLabel="Job Place"
                getValue={jobPlaceHandler}
              />
              <DropdownButton
                dropdownData={data}
                dropdownLabel="Job Type"
                getValue={jobTypeHandler}
              />
              <DropdownButton
                dropdownData={data}
                dropdownLabel="Education"
                getValue={educationHandler}
              />
              <DropdownButton
                dropdownData={data}
                dropdownLabel="Experience"
                getValue={experienceHandler}
              />
              <DropdownButton
                dropdownData={data}
                dropdownLabel="Gender"
                getValue={genderHandler}
              />
              <DropdownButton
                dropdownData={data}
                dropdownLabel="Age Limit"
                getValue={ageLimitHandler}
              />
              <DropdownButton
                dropdownData={data}
                dropdownLabel="Domicile"
                getValue={domicileHandler}
              />

              <DatePicker label="Publish" getDate={getPublishDate} />
              <DatePicker label="Last Date" getDate={getLastDate} />
              <ImagePickerButton pickedImage={pickedImageHandler} />
              <Button
                title="Submit"
                onPress={formSubmitHandler}
                color={Colors.primary}
                titleStyle={styles.submitButton}
                containerStyle={styles.buttonContainer}
              />
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default DataEntryScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 10,
  },
  form: {
    backgroundColor: "#fff",
    overflow: "hidden",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.35,
    shadowRadius: 10,
    elevation: 2,
    paddingTop: 20,
    paddingBottom: 10,
    paddingHorizontal: 10,
  },
  inputStyle: {
    borderBottomWidth: 0.5,
  },
  submitButton: {
    textTransform: "uppercase",
    fontWeight: "bold",
    letterSpacing: 0.8,
  },
  buttonContainer: {
    marginTop: 20,
    width: "50%",
    alignSelf: "center",
  },
});
