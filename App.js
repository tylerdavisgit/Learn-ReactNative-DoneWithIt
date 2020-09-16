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

export default function App() {
  const [imageUri, setImageUri] = useState();
  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestCameraRollPermissionsAsync();
    if (!granted) alert("You need to enable permission to access the library!");
  };

  useEffect(async () => {
    requestPermission();
  }, []);

  const selectImage = async () => {
    try {
      const res = await ImagePicker.launchImageLibraryAsync();
      if (!res.cancelled) setImageUri(res.uri);
    } catch (error) {
      console.log("error reading an image", error);
    }
  };
  return (
    <Screen>
      <ImageInput
        imageUri={imageUri}
        onChangeImage={(uri) => setImageUri(uri)}
      />
    </Screen>
  );
}
