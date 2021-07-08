import React from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { colors } from "../assets/Colors";

export const MyDesk = () => {
  return (
    <SafeAreaView>
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
      <ScrollView>
        <View>
          <View style={styles.desk}>
            <Text style={styles.deskTitle}>
              To Do
            </Text>
          </View>
          <View style={styles.desk}>
            <Text style={styles.deskTitle}>
              In Progress
            </Text>
          </View>
          <View style={styles.desk}>
            <Text style={styles.deskTitle}>
              Completed
            </Text>
          </View>
        </View>
        <View style={{ marginBottom: 100 }} />
      </ScrollView>
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
  },
  desk: {
    marginBottom: 10,
    marginHorizontal: 15,
    borderWidth: 1,
    borderColor: colors.lightgray,
    borderRadius: 4,
    textAlign: "center"
  },
  deskTitle: {
    marginLeft: 15,
    marginVertical: 20,
    color: colors.primary,
    fontSize: 17
  }
});
