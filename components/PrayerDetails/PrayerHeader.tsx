import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../assets/Colors";
import { useNavigation } from "@react-navigation/native";

export const PrayerHeader = ({ title }: { title: string }) => {
  const navigation = useNavigation()
  return (
    <View style={styles.title}>
      <View style={styles.iconGroup}>
        <TouchableOpacity onPress={() => {navigation.goBack()}}><Image
          source={require("./../../assets/icons/back.png")}
          style={styles.iconBack}
        /></TouchableOpacity>
        <Image
          source={require("./../../assets/icons/prayer.png")}
          style={styles.iconPrayer}
        />
      </View>
      <Text style={styles.text}>
        {title}
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
