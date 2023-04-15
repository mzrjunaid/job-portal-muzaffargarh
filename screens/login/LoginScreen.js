import React, { useRef, useState } from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import Colors from "../../constents/Colors";
import { Button, Card, Icon, Input, Text } from "@rneui/themed";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../firebase";

const screenWidth = Dimensions.get("screen").width;

const LoginScreen = () => {
  const [isFocusedEmail, setIsFocusedEmail] = useState(false);
  const [isFocusedPassword, setIsFocusedPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [wrongCredentials, setWrongCredentials] = useState(false);

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

  const passwordValidation = () => {
    const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    const hasLowerCase = /[a-z]/;
    const hasUpperCase = /[A-Z]/;

    if (password.length < 8) {
      setPasswordError("Password should be 8 characters long");
      return;
    } else if (
      !hasSpecialChar.test(password) ||
      !hasLowerCase.test(password) ||
      !hasUpperCase.test(password)
    ) {
      setPasswordError(
        "Password should contain special character and 1 lowercase and 1 uppercase character"
      );
      return;
    }
    setPasswordError("");
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Logged in with: ", user.email);
      })
      .catch((error) => alert(error.message));
  };

  // access user Token

  if (auth.currentUser) {
    auth.currentUser
      .getIdToken(true)
      .then((token) => console.log(token))
      .catch((error) => console.log(error.message));
  }

  const handleSignOut = () => {
    if (auth.currentUser) {
      auth
        .signOut()
        .then(console.log("Logged Out"))
        .catch((error) => console.log(error.message));
    } else {
      console.log("Already Logged Out");
    }
  };

  // console.log(
  //   new Date(
  //     new Date().getTime() +
  //       parseInt(auth.currentUser.stsTokenManager.expirationTime) * 100
  //   )
  // );

  //Token Expiration Date
  // console.log(
  //   new Date(auth.currentUser.stsTokenManager.expirationTime)
  // );

  return (
    <SafeAreaProvider>
      <View style={styles.screen}>
        <Card containerStyle={styles.formContainer}>
          <Card.Title style={{ fontSize: 28, color: Colors.primary }}>
            Admin Page
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
              onEndEditing={passwordValidation}
              errorMessage={passwordError}
            />
          </View>
          {wrongCredentials ? (
            <View style={styles.bottomMargin}>
              <Text style={styles.wrongCredentials}>
                Check Email or Password
              </Text>
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
            onPress={handleSignIn}
          />

          <Button
            title="Sign Out"
            buttonStyle={styles.btn}
            uppercase
            titleStyle={{ fontSize: 24 }}
            color={Colors.primary}
            onPress={handleSignOut}
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
