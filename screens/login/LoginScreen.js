import React, { useRef, useState } from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import Colors from "../../constents/Colors";
import { Button, Card, Icon, Input, Text } from "@rneui/themed";


import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import {
  loginFailure,
  loginRequest,
  loginSuccess,
} from "../../store/actions/auth";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const screenWidth = Dimensions.get("screen").width;

const LoginScreen = () => {
  const [isFocusedEmail, setIsFocusedEmail] = useState(false);
  const [isFocusedPassword, setIsFocusedPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState("");
  // const [passwordError, setPasswordError] = useState("");
  const [wrongCredentials, setWrongCredentials] = useState(false);

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const input_1 = useRef(null);
  const input_2 = useRef(null);

  const inputStyleEmail = {
    borderColor: isFocusedEmail ? Colors.primary : Colors.accentText,
    borderBottomWidth: isFocusedEmail ? 2 : 1,
  };

  const inputStylePassword = {
    borderColor: isFocusedPassword ? Colors.primary : Colors.accentText,
    borderBottomWidth: isFocusedPassword ? 2 : 1,
  };

  const handleEmailValidation = () => {
    if (!validateEmail(email)) {
      setEmailError("Invalid email address");
      return;
    }
    setEmailError("");
    input_2.current.focus();
  };

  const validateEmail = (email) => {
    var re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  // const passwordValidation = () => {
  //   const hasSpecialChar = /[!@$&]/;
  //   const hasLowerCase = /[a-z]/;
  //   const hasUpperCase = /[A-Z]/;

  //   if (password.length < 8) {
  //     setPasswordError("Password should be 8 characters long");
  //     return;
  //   } else if (
  //     !hasSpecialChar.test(password) ||
  //     !hasLowerCase.test(password) ||
  //     !hasUpperCase.test(password)
  //   ) {
  //     setPasswordError(
  //       "Password should contain special character and 1 lowercase and 1 uppercase character"
  //     );
  //     return;
  //   }
  //   setPasswordError("");
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginRequest());
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      dispatch(loginSuccess(userCredential.user));
      navigation.navigate("admin");
    } catch (error) {
      dispatch(loginFailure(error.message));
    }
  };

  // const handleSignIn = async () => {
  //   try {
  //     // await signInWithEmailAndPassword(auth, email, password);
  //     navigation.replace("admin");
  //   } catch (e) {
  //     if (e.code == "auth/user-not-found") {
  //       setWrongCredentials("User Not Found / Wrong Credentials");
  //     } else if (e.code == "auth/wrong-password") {
  //       setWrongCredentials("Please Check Password");
  //     } else if (e.code == "auth/too-many-requests") {
  //       setWrongCredentials("Too Many Wrong Attempts");
  //     } else {
  //       console.log(e.code);
  //     }
  //   }
  // };

  return (
    <SafeAreaProvider>
      <View style={styles.screen}>
        <Card containerStyle={styles.formContainer}>
          <Card.Title style={{ fontSize: 28, color: Colors.primary }}>
            ADMIN
          </Card.Title>
          <Card.Divider />
          <View style={styles.bottomMargin}>
            <Input
              ref={input_1}
              id="email"
              onFocus={() => setIsFocusedEmail(true)}
              onBlur={() => setIsFocusedEmail(false)}
              placeholder="Enter Your Email"
              leftIcon={
                <Icon
                  name="user"
                  type="font-awesome-5"
                  size={16}
                  color={Colors.primary}
                  solid
                />
              }
              leftIconContainerStyle={{ marginRight: 8 }}
              inputContainerStyle={inputStyleEmail}
              required
              email
              keyboardType="email-address"
              autoCapitalize="none"
              onChangeText={(value) => setEmail(value)}
              onEndEditing={handleEmailValidation}
              onSubmitEditing={() => {
                input_2.current.focus();
              }}
              blurOnSubmit={false}
              errorMessage={emailError}
            />
            <Input
              ref={input_2}
              leftIcon={
                <Icon
                  name="lock"
                  type="font-awesome-5"
                  size={16}
                  color={Colors.primary}
                />
              }
              leftIconContainerStyle={{ marginRight: 8 }}
              onFocus={() => setIsFocusedPassword(true)}
              onBlur={() => setIsFocusedPassword(false)}
              inputContainerStyle={inputStylePassword}
              placeholder="Enter Your Password"
              required
              secureTextEntry
              keyboardType="default"
              autoCapitalize="none"
              onChangeText={(value) => setPassword(value)}
              // onEndEditing={passwordValidation}
              // errorMessage={passwordError}
            />
          </View>
          {wrongCredentials ? (
            <View style={styles.bottomMargin}>
              <Text style={styles.wrongCredentials}>{wrongCredentials}</Text>
            </View>
          ) : (
            ""
          )}
          <Button
            title="Login"
            buttonStyle={styles.btn}
            uppercase
            titleStyle={{ fontSize: 24 }}
            color={Colors.primary}
            onPress={handleSubmit}
            disabled={emailError ? true : false}
          />
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
    width: screenWidth / 1.3,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16,
    elevation: 24,
    paddingVertical: 30,
  },
  bottomMargin: {
    marginBottom: 10,
  },
  btn: {
    borderRadius: 10,
  },
  wrongCredentials: {
    color: "red",
    textAlign: "center",
  },
});
