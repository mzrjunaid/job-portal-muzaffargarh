import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import Colors from "../constents/Colors";

const DropdownButton = ({ dropdownLabel, dropdownData, getValue }) => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const handleDropdownChange = useCallback(
    (item) => {
      setValue(item.label);
      setIsFocus(false);
    },
    [getValue]
  );

  useEffect(() => {
    if (!value) {
      return;
    }
    getValue(value);
  }, [value]);

  const renderLabel = () => {
    return <Text style={styles.label}>{dropdownLabel}</Text>;
  };

  return (
    <View style={styles.container}>
      {renderLabel()}
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: Colors.primary }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={dropdownData}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? `Select ${dropdownLabel}...` : "..."}
        onFocus={() => setIsFocus(true)}
        onBlur={() => {
          setIsFocus(false);
          if (!value) {
          }
        }}
        onChange={handleDropdownChange}
      />
    </View>
  );
};

export default DropdownButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  dropdown: {
    height: 50,
    borderColor: Colors.inputBorderColor,
    borderBottomWidth: 0.5,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    backgroundColor: "white",
    zIndex: 999,
    fontSize: 16,
    color: Colors.primary,
    fontWeight: "bold",
  },
  placeholderStyle: {
    color: Colors.accentText,
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
});
