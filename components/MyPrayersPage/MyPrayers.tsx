import React, { useState } from "react";
import {
  Button,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text, TextInput,
  TouchableHighlight,
  View
} from "react-native";
import CheckBox from "@react-native-community/checkbox";
import { Prayer } from "./Prayer";

export const MyPrayers = () => {
  return (
    <View>
      <View style={styles.inputNewPrayer}>
        <View style={styles.inputContent}>
          <Pressable>
            <Image
              source={require("./../../assets/icons/plus.png")}
              style={styles.addIcon}
            />
          </Pressable>
          <TextInput
            style={styles.textInput}
            placeholder={"Add a prayer..."}
            placeholderTextColor={"#9C9C9C"}
            autoCompleteType={"off"}
            caretHidden={false}
            selectionColor={"#72A8BC"}
          />
        </View>
      </View>
      <Prayer
        text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit"}
        usersCount={3}
        prayersCount={120}
      />
      <Prayer
        text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit"}
        usersCount={0}
        prayersCount={120}
      />
      <TouchableHighlight onPress={()=>{}}>
        <View style={styles.button}>
          <Text style={styles.buttonTitle}>Show Answered Prayers</Text>
        </View>
      </TouchableHighlight>
    </View>
  )
}

const styles = StyleSheet.create({
  inputNewPrayer: {
    marginHorizontal: 15,
    borderColor: "#E5E5E5",
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 16,
  },
  inputContent: {
    marginVertical: 13,
    marginLeft: 14,
    flexDirection: "row",
  },
  addIcon: {
    width: 24,
    height: 24,
  },
  textInput: {
    marginLeft: 14,
    fontSize: 17,
  },
  button: {
    marginVertical: 21,
    backgroundColor: "#BFB393",
    height: 30,
    borderRadius: 15,
    justifyContent: "center",
    alignSelf: 'center',

  },
  buttonTitle: {
    textTransform: "uppercase",
    color: "#FFFFFF",
    textAlign: "center",
    marginHorizontal: 17,
    fontSize: 12,
    lineHeight: 14,
  },
})
