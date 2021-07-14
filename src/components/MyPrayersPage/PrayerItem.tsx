import React, { useState } from "react";
import { Dimensions, Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CheckBox from "@react-native-community/checkbox";
import { colors } from "../../../assets/Colors";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { types } from "../../redux/types";
import Swipeout from 'react-native-swipeout';


type PropsType = {
  id: number
  title: string
  checked: boolean
  usersCount: number
  prayersCount: number
}

type RootStackParamList = {
  Prayer: { id: number }
}

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList>

const width = Dimensions.get("window").width;

export const PrayerItem = ({ id, title, checked, usersCount, prayersCount }: PropsType) => {
  const swipeBtn = [{
    text: 'Delete',
    backgroundColor: colors.vinous,
    onPress: () => deletePrayer()
  }]
  const navigation = useNavigation<ProfileScreenNavigationProp>();
  const dispatch = useDispatch();
  const changeStatus = (value: boolean) => {
    dispatch({ type: types.UPDATE_PRAYER_REQUESTED, payload: { title, checked: value, prayerId: id } });
  };
  const deletePrayer = () => {
    dispatch({type: types.DELETE_PRAYER_REQUESTED, payload: {prayerId: id}})
  }
  return (
    <Swipeout right={swipeBtn} backgroundColor={colors.white} autoClose>
    <View style={styles.container}>

        <View style={styles.prayerItem}>
        <View style={styles.group}>
          <Image source={require("../../../assets/icons/state.png")} />
          <CheckBox
            onCheckColor={"#514D47"}
            onTintColor={"#514D47"}
            tintColor={"#514D47"}
            boxType={"square"}
            disabled={false}
            style={styles.checkbox}
            value={checked}
            onValueChange={value => changeStatus(value)}
          />
          <Pressable
            style={{
              width: usersCount === 0 ? width - 189 : width - 240,
              marginLeft: 15
            }}
            onPress={() => {
              navigation.navigate("Prayer", { id });
            }}
          >
            <Text
              style={styles.prayerTitle}
              ellipsizeMode={"tail"}
              numberOfLines={1}
            >
              {title}
            </Text>
          </Pressable>
        </View>
        <View style={styles.group}>
          {usersCount > 0
          && <View style={styles.iconsGroup}>
            <Image
              source={require("../../../assets/icons/user.png")}
              style={styles.icon}
            />
            <Text style={styles.text}>{usersCount}</Text>
          </View>
          }
          {prayersCount > 0
          && <View style={styles.iconsGroup}>
            <Image
              source={require("../../../assets/icons/prayer.png")}
              style={styles.icon}
            />
            <Text style={styles.text}>{prayersCount}</Text>
          </View>}
        </View>
      </View>
    </View>
    </Swipeout>

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
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between"
  },
  group: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  prayerTitle: {
    fontSize: 17,
    color: colors.primary,
    lineHeight: 20
  },
  iconsGroup: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  icon: {
    marginLeft: 4,
    marginRight: 2
  },
  text: {
    fontSize: 12,
    color: colors.primary,
    width: 21
  },
  checkbox: {
    marginLeft: 15
  }
});
