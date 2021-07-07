import React, { useState } from "react";
import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from "react-native";
import { MyPrayers } from "./MyPrayers";

type TabsType = "prayers" | "subscribed"

type PropsType = {
  title: string
}

export const MyPrayersPage = ({title}: PropsType) => {
  const [activeTab, setActivatab] = useState<TabsType>("prayers");
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <View style={styles.container}>
          <Text style={styles.title}>To Do</Text>
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
            onPressOut={() => setActivatab("prayers")}
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
            onPressOut={() => setActivatab("subscribed")}
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
      <MyPrayers />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#ffffff",
    height: 103,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
    textAlign: "center",
    justifyContent: "space-between",
    marginBottom: 16
  },
  container: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20
  },
  title: {
    color: "#514D47",
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
    color: "#72A8BC",
    fontSize: 13,
    lineHeight: 16,
    textTransform: "uppercase"
  },
  unactiveTabTitle: {
    color: "#C8C8C8",
    paddingBottom: 18
  },
  subsTab: {
    flexDirection: "row",
    textAlign: "center"
  },
  subscripedCount: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: "#AC5253",
    marginLeft: 4,
    justifyContent: "center",
    textAlign: "center",
  },
  count: {
    textAlign: "center",
    fontSize: 9,
    color: "#FFFFFF",
  },
  underline: {
    borderWidth: 2,
    borderColor: "#72A8BC"
  }
});

