import React, { useRef, useState } from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import Colors from "../../constents/Colors";
import { Button, Card, Icon, Input } from "@rneui/themed";

const screenWidth = Dimensions.get("screen").width;

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };
  const handleBlur = () => {
    setIsFocused(false);
  };

  const inputStyle = {
    borderColor: isFocused ? "#d3d" : "gray",
  };

  return (
    <SafeAreaProvider>
      <View style={styles.screen}>
        <Card containerStyle={styles.formContainer}>
          <Card.Title>LOGIN</Card.Title>
          <Card.Divider />
          <View>
            <Input
              onFocus={handleFocus}
              onBlur={handleBlur}
              placeholder="Enter Your Email"
              leftIcon={
                <Icon
                  name="user"
                  type="font-awesome"
                  size={24}
                  color={Colors.primary}
                />
              }
              inputContainerStyle={inputStyle}
              required
              email
              keyboardType="email-address"
              autoCapitalize="none"
              onChangeText={(value) => setEmail(value)}
              onEndEditing={() => {
                //Validation Function
              }}
              
            />
            <Input placeholder="Enter Your Password" />
            <Button
              title="Login"
              uppercase
              color={Colors.primary}
              onPress={() => {
                console.log(email);
              }}
            />
          </View>
        </Card>
      </View>
    </SafeAreaProvider>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  formContainer: {
    width: screenWidth / 1.4,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16,

    elevation: 24,
  },
});
