import React, { useState } from "react";
import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text, TextInput,
  TouchableHighlight,
  View
} from "react-native";
import CheckBox from "@react-native-community/checkbox";

type PropsType = {
  text: string
  usersCount: number
  prayersCount: number
}

export const Prayer = ({ text, usersCount, prayersCount }: PropsType) => {
  return (
    <View style={styles.container}>
      <View style={styles.prayerItem}>
        <View style={styles.iconsGroup}><Image source={require("./../../assets/icons/state.png")} />
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
          <View style={styles.iconsGroup}>
            <Image
              source={require("./../../assets/icons/prayer.png")}
              style={styles.icon}
            />
            <Text style={styles.text}>{prayersCount}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  prayerItem: {
    paddingVertical: 18,
    marginLeft: 15,
    marginRight: 121,
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
    justifyContent: "space-between"
  },
  prayerTitle: {
    fontSize: 17,
    color: "#514D47",
    lineHeight: 20,
    textAlign: "left",
    marginLeft: 52,
    marginRight: 20

  },
  iconsGroup: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center"
  },
  icon: {
    marginLeft: 4,
    marginRight: 2
  },
  text: {
    fontSize: 12,
    color: "#514D47",
    width: 21
  }
});
