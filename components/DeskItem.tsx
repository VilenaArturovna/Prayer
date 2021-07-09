import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { colors } from "../assets/Colors";
import { useNavigation } from "@react-navigation/native";

type RootStackParamList = {
  Prayers: { title: string };
}

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList>

type TitleProps = {
  title: string
}

export const DeskItem = ({ title }: TitleProps) => {
  const navigation = useNavigation<ProfileScreenNavigationProp>();
  return (
    <TouchableOpacity style={styles.desk} onPress={() => navigation.navigate("Prayers", { title })}>
      <Text style={styles.deskTitle}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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
