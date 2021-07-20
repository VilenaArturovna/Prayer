import React, { useState } from "react";
import { ActivityIndicator, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { types } from "../../redux/types";
import { RootStateType } from "../../redux/store";
import { ButtonPrayer } from "../../../assets/ButtonPrayer";
import { colors } from "../../../assets/Colors";
import { RequestStatusType } from "../../redux/reducers/auth-reducer";

export const SignIn = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [email, onChangeEmail] = useState<string>("");
  const [password, onChangePassword] = useState<string>("");
  const isLoggedIn = useSelector<RootStateType, boolean>(state => state.auth.isLoggedIn);
  const status = useSelector<RootStateType, RequestStatusType>(state => state.auth.status);
  isLoggedIn && navigation.navigate("MyDesk");
  // REVU: нет валидации введенных данных
  // Что будет если в запросе упадет ошибка?
  // Нужно ли очищать поле с емайлом?
  const signIn = () => {
    dispatch({ type: types.SIGN_IN_REQUESTED, payload: { email: email.toLowerCase(), password } });
    onChangeEmail("");
    onChangePassword("");
  };
  return (
    <View style={styles.container}>
      {status === "loading" && <ActivityIndicator size="large" color={colors.blue} />}
      <TextInput
        value={email}
        onChangeText={onChangeEmail}
        placeholder={"Email"}
        style={styles.field}
      />
      <TextInput
        value={password}
        onChangeText={onChangePassword}
        placeholder={"Password"}
        style={styles.field}
      />
      <ButtonPrayer title={"Send"} onPress={signIn} />
      <Pressable onPress={() => navigation.navigate("SignUp")}>
        <Text style={{ textDecorationLine: "underline" }}>Sign Up</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.white
  },
  field: {
    width: 200,
    height: 30,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.gray,
    marginTop: 10,
    padding: 5
  }
});
