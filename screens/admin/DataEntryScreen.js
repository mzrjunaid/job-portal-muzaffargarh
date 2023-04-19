import { Input } from "@rneui/themed";
import React, { useLayoutEffect, useRef } from "react";
import { useState } from "react";
import { KeyboardAvoidingView } from "react-native";
import { View, ScrollView, StyleSheet } from "react-native";
import Colors from "../../constents/Colors";
import { TouchableWithoutFeedback } from "react-native";
import { Keyboard } from "react-native";
import DropdownButton from "../../components/DropdownButton";

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
  const [selectedPurpose, setSelectedPurpose] = useState(null);

  const input_1 = useRef(null);
  const input_2 = useRef(null);
  const input_3 = useRef(null);
  const input_4 = useRef(null);
  const input_5 = useRef(null);
  const input_6 = useRef(null);
  const input_7 = useRef(null);
  const input_8 = useRef(null);
  const input_9 = useRef(null);
  const input_10 = useRef(null);
  const input_11 = useRef(null);
  const input_12 = useRef(null);

  const titleValidation = () => {
    if (title.length === 0) {
      setTitleError("Title Cannot be blank");
      setFormError(true);
    }
    setFormError(false);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "New Advertisement",
    });
  }, [navigation]);

  const dropDownValue = (value) => {
    setSelectedPurpose(value);
    console.log(value);
  };
  const dropDownValue2 = (value) => {
    setSelectedPurpose(value);
    console.log(value);
  };

  return (
    <KeyboardAvoidingView style={styles.screen} behavior="height">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.form}>
              <Input
                ref={input_1}
                onFocus={() => {}}
                onBlur={() => {}}
                label="Advertisement Title:"
                labelStyle={{ color: Colors.primary }}
                placeholder="Enter text here..."
                leftIconContainerStyle={{ marginRight: 8 }}
                // inputContainerStyle={inputStyleEmail}
                required
                email
                keyboardType="email-address"
                autoCapitalize="none"
                onChangeText={(value) => setTitle(value)}
                onEndEditing={titleValidation}
                onSubmitEditing={() => {
                  input_2.current.focus();
                }}
                // blurOnSubmit={false}
                errorMessage={titleError}
              />
              <Input
                ref={input_2}
                onFocus={() => {}}
                onBlur={() => {}}
                label="Job Type:"
                labelStyle={{ color: Colors.primary }}
                placeholder="Enter text here..."
                leftIconContainerStyle={{ marginRight: 8 }}
                // inputContainerStyle={inputStyleEmail}
                required
                keyboardType="default"
                autoCapitalize="sentences"
                onChangeText={(value) => setTitle(value)}
                // onEndEditing={handleEmailValidation}
                onSubmitEditing={() => {
                  input_3.current.focus();
                }}
                // blurOnSubmit={false}
                // errorMessage={emailError}
              />
              <Input
                ref={input_3}
                onFocus={() => {}}
                onBlur={() => {}}
                label="Job Place:"
                labelStyle={{ color: Colors.primary }}
                placeholder="Enter text here..."
                leftIconContainerStyle={{ marginRight: 8 }}
                // inputContainerStyle={inputStyleEmail}
                required
                email
                keyboardType="email-address"
                autoCapitalize="none"
                onChangeText={(value) => setTitle(value)}
                // onEndEditing={handleEmailValidation}
                onSubmitEditing={() => {
                  //   input_2.current.focus();
                }}
                // blurOnSubmit={false}
                // errorMessage={emailError}
              />

              <DropdownButton
                dropdownData={data}
                dropdownLabel="No of Vacancies: "
                getValue={dropDownValue}
              />
              <DropdownButton
                dropdownData={data}
                dropdownLabel="No of Vacancies: "
                getValue={dropDownValue2}
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
    paddingVertical: 30,
  },
});
