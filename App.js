import React, { useEffect, useState } from "react";

import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

import Screen from "./app/components/Screen";
import { TextInput, Text, Switch, Button, Image } from "react-native";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";
import LoginScreen from "./app/assets/screens/LoginScreen";
import ListingEditScreen from "./app/assets/screens/ListingEditScreen";
import MessagesScreen from "./app/assets/screens/MessagesScreen";
import RegisterScreen from "./app/assets/screens/RegisterScreen";
import ImageInput from "./app/components/ImageInput";
import ImageInputList from "./app/components/ImageInputList";

export default function App() {
  return <ListingEditScreen />;
}
