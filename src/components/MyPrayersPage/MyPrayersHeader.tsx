import React from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from "react-native";
import { colors } from "../../../assets/Colors";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { RootStateType } from "../../redux/store";
import { ColumnType } from "../../api/api";

const Tab = createMaterialTopTabNavigator();
type RootStackParamList = {
  UpdateColumn: { id: number };
}
type NavigationProp = StackNavigationProp<RootStackParamList>

export const MyPrayersHeader = ({id}: { id: number }) => {
  const navigation = useNavigation<NavigationProp>();
  const columns = useSelector<RootStateType, Array<ColumnType>>(state => state.columns)
  const column = columns.find(column => column.id === id)

  return (
      <View style={styles.header}>
        <View style={styles.container}>
          <Text style={styles.title}>{column.title}</Text>
          <TouchableHighlight
            style={styles.icon}
            onPress={
              () => navigation.navigate("UpdateColumn", { id })
            }
          >
            <Image
              style={styles.iconImage}
              source={require("../../../assets/icons/settings.png")}
            />
          </TouchableHighlight>
        </View>
        <View style={styles.tabsContainer}>
          <Pressable

            style={styles.tab}
          >
            <Text
              style={[
                styles.tabTitle
              ]}
            >
              My Prayers
            </Text>
            <View
              style={[
                styles.underline
              ]}
            />
          </Pressable>
          <Pressable
            style={styles.tab}
          >
            <View style={styles.subsTab}>
              <Text
                style={[
                  styles.tabTitle,
                ]}
              >
                subscribed
              </Text>
              <View style={styles.subscripedCount}>
                <Text style={styles.count}>3</Text>
              </View>
            </View>
            <View
              style={[
                styles.underline
              ]}
            />
          </Pressable>
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.white,
    height: 103,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightgray,
    textAlign: "center",
    justifyContent: "space-between",

  },
  container: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20
  },
  title: {
    color: colors.primary,
    textAlign: "center",
    fontSize: 17,
    width: 137
  },
  icon: {
    position: "absolute",
    right: 15
  },
  iconImage: {
    width: 24,
    height: 24
  },
  tabsContainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  tab: {
    width: "50%",
  },
  tabTitle: {
    textAlign: "center",
    paddingBottom: 16,
    color: colors.blue,
    fontSize: 13,
    lineHeight: 16,
    textTransform: "uppercase"
  },
  unactiveTabTitle: {
    color: colors.gray,
    paddingBottom: 18
  },
  subsTab: {
    flexDirection: "row",
    justifyContent: "center",
    textAlign: "center"
  },
  subscripedCount: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: colors.vinous,
    marginLeft: 4,
    justifyContent: "center",
    textAlign: "center",
  },
  count: {
    textAlign: "center",
    fontSize: 9,
    color: colors.white,
  },
  underline: {
    borderWidth: 2,
    borderColor: colors.blue
  }
});

