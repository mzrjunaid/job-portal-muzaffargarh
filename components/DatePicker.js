import React, { useEffect, useState } from "react";
import { Platform, Pressable, Text, View, StyleSheet } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import Colors from "../constents/Colors";

const DatePicker = ({ label, getDate }) => {
  const [show, setShow] = useState(null);
  const [date, setDate] = useState(new Date());
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  useEffect(() => {
    if (!date) {
      return;
    }
    getDate(date);
  }, [date]);

  return (
    <View style={styles.datePicker}>
      <Text style={styles.dateButtonLabel}>{label}</Text>
      <Pressable onPress={() => setShow(true)} style={styles.selectDate}>
        <Text style={styles.dateButton}>
          {date.toLocaleString("en-US", options)}
        </Text>
      </Pressable>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="date"
          is24Hour={true}
          onChange={onChange}
          positiveButton={{
            label: "Set Date",
            textColor: Colors.primary,
          }}
          negativeButton={{ label: "Cancel", textColor: "red" }}
        />
      )}
    </View>
  );
};

export default DatePicker;

const styles = StyleSheet.create({
  datePicker: {
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  selectDate: {
    height: 50,
    borderBottomWidth: 0.5,
    justifyContent: "center",
    borderBottomColor: Colors.inputBorderColor,
  },
  dateButton: {
    color: Colors.accentText,
    paddingHorizontal: 8,
  },
  dateButtonLabel: {
    color: Colors.primary,
    fontSize: 16,
    fontWeight: "bold",
  },
});
