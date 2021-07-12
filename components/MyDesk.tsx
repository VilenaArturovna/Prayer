import React from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { colors } from "../assets/Colors";
import { DeskItem } from "./DeskItem";

export const MyDesk = () => {
  const desks = [
    { id: "1", title: "To Do" },
    { id: "2", title: "In Progress" },
    { id: "3", title: "Completed" }
  ];

  return (
    <SafeAreaView style={{backgroundColor: colors.white, minHeight: "100%"}}>
      <View style={styles.header}>
        <View style={styles.container}>
          <Text style={styles.title}>My Desk</Text>
          <TouchableOpacity
            style={styles.icon}
            onPress={() => {
              return "add new desk";
            }}
          >
            <Image
              style={styles.iconImage}
              source={require("./../assets/icons/plus.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
        <FlatList
          data={desks}
          renderItem={(item) => <DeskItem title={item.item.title} />}
          keyExtractor={item => item.id} />
        <View style={{ marginBottom: 100 }} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.white,
    height: 64,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightgray,
    textAlign: "center",
    justifyContent: "center",
    marginBottom: 15
  },
  title: {
    color: colors.primary,
    textAlign: "center",
    fontSize: 17,
    width: 137
  },
  container: {
    justifyContent: "center",
    flexDirection: "row"
  },
  icon: {
    position: "absolute",
    right: 15
  },
  iconImage: {
    width: 16,
    height: 16
  }
});
