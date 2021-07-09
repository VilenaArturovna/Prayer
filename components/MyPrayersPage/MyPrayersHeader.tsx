import React from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from "react-native";
import { colors } from "../../assets/Colors";
import { TabsType } from "./MyPrayersPage";

type PropsType = {
  title: string
  activeTab: TabsType
  setActivaTab: (activeTab: TabsType) => void
}

export const MyPrayersHeader = ({title, activeTab, setActivaTab}: PropsType) => {
  return (
      <View style={styles.header}>
        <View style={styles.container}>
          <Text style={styles.title}>{title}</Text>
          <TouchableHighlight
            style={styles.icon}
            onPress={() => {
              return "settings";
            }}
          >
            <Image
              style={styles.iconImage}
              source={require("../../assets/icons/settings.png")}
            />
          </TouchableHighlight>
        </View>
        <View style={styles.tabsContainer}>
          <Pressable
            onPressOut={() => setActivaTab("prayers")}
            style={styles.tab}
          >
            <Text
              style={[
                styles.tabTitle,
                activeTab === "subscribed" && styles.unactiveTabTitle
              ]}
            >
              My Prayers
            </Text>
            <View
              style={[
                styles.underline,
                activeTab === "subscribed" && { display: "none" }
              ]}
            />
          </Pressable>
          <Pressable
            onPressOut={() => setActivaTab("subscribed")}
            style={styles.tab}
          >
            <View style={styles.subsTab}>
              <Text
                style={[
                  styles.tabTitle,
                  activeTab === "prayers" && styles.unactiveTabTitle
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
                styles.underline,
                activeTab === "prayers" && { display: "none" }
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

