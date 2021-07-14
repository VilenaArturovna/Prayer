import React from "react";
import { Image, Pressable, StyleSheet, Text, TouchableHighlight, View } from "react-native";
import { colors } from "../../../assets/Colors";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { ColumnType } from "../../api/api";
import { MyPrayers } from "./MyPrayers";

const Tab = createMaterialTopTabNavigator();
type RootStackParamList = {
  UpdateColumn: { column: ColumnType };
}
type NavigationProp = StackNavigationProp<RootStackParamList>

export const MyPrayersHeader = ({ column }: { column: ColumnType }) => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.header}>
      <View style={styles.container}>
        <Text style={styles.title}>{column.title}</Text>
        <TouchableHighlight
          style={styles.icon}
          onPress={
            () => navigation.navigate("UpdateColumn", { column })
          }
        >
          <Image
            style={styles.iconImage}
            source={require("../../../assets/icons/settings.png")}
          />
        </TouchableHighlight>
      </View>
      <View style={styles.tabsContainer}>
        <Tab.Navigator tabBarOptions={{
          indicatorStyle: {
            borderWidth: 2,
            borderColor: colors.blue
          },
          labelStyle: {
            fontSize: 13,
            lineHeight: 16,
            textTransform: "uppercase"
          },
          activeTintColor: colors.blue,
          inactiveTintColor: colors.gray,
          showIcon: true
        }}>
          <Tab.Screen name={"MY PRAYERS"} component={MyPrayers} />
          <Tab.Screen name={"SUBSCRIBED"} component={MyPrayers} />
        </Tab.Navigator>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.white,
    height: 103,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightgray,
    textAlign: "center",
    justifyContent: "space-between"

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




});

