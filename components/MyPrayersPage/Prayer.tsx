import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import CheckBox from "@react-native-community/checkbox";
import { colors } from "../../assets/Colors";

type PropsType = {
  text: string
  usersCount: number
  prayersCount: number
}

export const Prayer = ({ text, usersCount, prayersCount }: PropsType) => {
  return (
    <View style={styles.container}>
      <View style={styles.prayerItem}>
        <View style={styles.iconsGroup}>
          <Image source={require("./../../assets/icons/state.png")} />
          <CheckBox
            onCheckColor={"#514D47"}
            onTintColor={"#514D47"}
            tintColor={"#514D47"}
            boxType={"square"}
            disabled={false}
            style={styles.checkbox}
          />
          <Text
            style={styles.prayerTitle}
            ellipsizeMode={"tail"}
            numberOfLines={1}
          >
            {text}
          </Text></View>
        <View style={styles.iconsGroup}>
          {usersCount > 0
          && <View style={styles.iconsGroup}>
            <Image
              source={require("./../../assets/icons/user.png")}
              style={styles.icon}
            />
            <Text style={styles.text}>{usersCount}</Text>
          </View>
          }
          {prayersCount > 0
          && <View style={styles.iconsGroup}>
            <Image
              source={require("./../../assets/icons/prayer.png")}
              style={styles.icon}
            />
            <Text style={styles.text}>{prayersCount}</Text>
          </View>}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: colors.lightgray,
    marginHorizontal: 15
  },
  prayerItem: {
    paddingVertical: 18,
    marginLeft: 20,
    marginRight: 126,
    flexDirection: "row",

    justifyContent: "space-between"
  },
  prayerTitle: {
    fontSize: 17,
    color: colors.primary,
    lineHeight: 20,
    marginLeft: 15,
    marginRight: 20

  },
  iconsGroup: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  icon: {
    marginLeft: 4,
    marginRight: 2,
  },
  text: {
    fontSize: 12,
    color: colors.primary,
    width: 21
  },
  checkbox: {
    marginLeft: 15,
  }
});
