import { Text, View, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { types } from "../redux/types";
import { colors } from "../../assets/Colors";
import { ButtonPrayer } from "../../assets/ButtonPrayer";

export const Welcome = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  // REVU: Здесь, лучше запрашивать какие-то инициализирующие данные, например объект пользователя,
  // при этом на бэкенде будет провалидирован токен, на случай если он невалидный или устарел
  useEffect(() => {
    AsyncStorage.getItem("token")
      .then((value) =>
        value && dispatch({ type: types.SET_TOKEN_REQUESTED, payload: { token: value } })
      );
    AsyncStorage.getItem("isLoggedIn").then((value) => {
      console.log(value);
      value === "true" ? navigation.navigate("MyDesk") : navigation.navigate("SignIn");
    });

  });
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Welcome to Prayer
      </Text>
      <ButtonPrayer title={"SIGN IN"} onPress={() => navigation.navigate("SignIn")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: colors.white,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 24,
    color: colors.primary
  }
});
