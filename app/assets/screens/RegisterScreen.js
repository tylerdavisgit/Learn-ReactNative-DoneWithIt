import React from "react";
import { StyleSheet } from "react-native";
import { AppForm, SubmitButton } from "../../components/forms";

import AppFormField from "../../components/forms/AppFormField";
import Screen from "../../components/Screen";

export default function RegisterScreen() {
  return (
    <Screen style={styles.container}>
      <AppForm>
        <AppFormField
          autoCorrect={false}
          icon="account"
          keyboardType="email-address"
          name="Name"
          placeholder="Name"
          textContentType="emailAddress"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton title="Register" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
