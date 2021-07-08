import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { colors } from "../../assets/Colors";

export const PrayerHeader = () => {
  return (
    <View style={styles.title}>
      <View style={styles.iconGroup}>
        <Image
          source={require("./../../assets/icons/back.png")}
          style={styles.iconBack}
        />
        <Image
          source={require("./../../assets/icons/prayer.png")}
          style={styles.iconPrayer}
        />
      </View>
      <Text style={styles.text}>
        Prayer item two which is for my family to love God whole heartedly.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    backgroundColor: colors.beige,
    paddingHorizontal: 15,
    paddingVertical: 21
  },
  iconGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  iconBack: {
    width: 18,
    tintColor: colors.white
  },
  iconPrayer: {
    width: 29,
    tintColor: colors.white
  },
  text: {
    fontSize: 17,
    lineHeight: 27,
    color: colors.white,
    marginTop: 18,
    marginBottom: 2
  }
});
