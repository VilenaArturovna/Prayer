import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import React from "react";
import { colors } from "./Colors";

type PropsType = {
  title: string
  onPress: () => void
}

export const ButtonPrayer = ({ title, onPress }: PropsType) => {
  return (
    <TouchableHighlight onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonTitle}>{title}</Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  button: {
    marginVertical: 21,
    marginHorizontal: 5,
    backgroundColor: colors.beige,
    height: 30,
    borderRadius: 15,
    justifyContent: "center",
    alignSelf: "center"
  },
  buttonTitle: {
    textTransform: "uppercase",
    color: colors.white,
    textAlign: "center",
    marginHorizontal: 17,
    fontSize: 12,
    lineHeight: 14
  }
});
