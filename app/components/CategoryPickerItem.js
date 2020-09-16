import React from "react";
import { StyleSheet, View } from "react-native";
import AppText from "./AppText";

import Icon from "./Icon";

export default function CategoryPickerItem({ item, onPress }) {
  return (
    <View style={styles.container}>
      <Icon backgroundColor={item.backgroundColor} name={item.icon} size={80} />
      <AppText style={styles.label}>{item.label}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "33%",
    paddingHorizontal: 30,
    paddingVertical: 15,
    alignItems: "center",
  },
  label: {
    marginTop: 5,
    textAlign: "center",
    fontSize: 16,
  },
});
