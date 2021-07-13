import React, { useState } from "react";
import { Button, Pressable, TextInput, View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { setIsLoggedInAC } from "../../redux/reducers/auth-reducer";

export const SignIn = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const [email, onChangeEmail] = useState<string>('')
  const [password, onChangePassword] = useState<string>('')
  return (
    <View style={styles.container}>
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
      <Button title={"Send"} onPress={() => dispatch(setIsLoggedInAC(true))} />
      <Pressable onPress={() => navigation.navigate("SignUp")} >
        <Text>Sign Up</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  field: {
    width: 200,
    height: 30,
    borderWidth: 1,
    margin: 5,
    padding: 3,
    borderRadius: 3,
  }
})
