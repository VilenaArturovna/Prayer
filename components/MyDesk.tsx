import React from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#ffffff",
    height: 64,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
    textAlign: "center",
    justifyContent: "center",
    marginBottom: 15
  },
  title: {
    color: "#514D47",
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
    borderColor: "#E5E5E5",
    borderRadius: 4,
    textAlign: "center"
  },
  deskTitle: {
    marginLeft: 15,
    marginVertical: 20,
    color: "#514D47",
    fontSize: 17
  }
});
