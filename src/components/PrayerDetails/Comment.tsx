import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { colors } from "../../../assets/Colors";

export const Comment = () => {
  return (
    <View style={styles.commentItem}>
      <Image
        source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
        style={styles.avatar}
      />
      <View style={{ flex: 1 }}>
        <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
          <Text style={styles.userName}>Anna Barber</Text>
          <Text style={styles.addingDate}>2 days ago</Text>
        </View>
        <Text style={styles.commentText}>Hey, Hey! style=styles. userNameAnna ddd Barber</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  commentItem: {
    borderTopColor: colors.lightgray,
    borderTopWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 14,
    flexDirection: "row"
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    padding: 3,
    marginRight: 9
  },
  userName: {
    color: colors.primary,
    fontSize: 17,
    lineHeight: 20,
    marginRight: 6,
    fontWeight: "600"
  },
  addingDate: {
    color: colors.gray,
    fontSize: 13,
    lineHeight: 15
  },
  commentText: {
    color: colors.primary,
    fontSize: 17,
    lineHeight: 20,
    marginTop: 2
  }
});
