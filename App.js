import React from "react";
import Screen from "./app/components/Screen";
import { TextInput, Text, Switch } from "react-native";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";
import LoginScreen from "./app/assets/screens/LoginScreen";
import ListingEditScreen from "./app/assets/screens/ListingEditScreen";
import MessagesScreen from "./app/assets/screens/MessagesScreen";
import RegisterScreen from "./app/assets/screens/RegisterScreen";

export default function App() {
  return <ListingEditScreen />;
}
