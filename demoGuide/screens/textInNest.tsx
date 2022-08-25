import React, { useState } from "react";
import { Text, StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

const TextInANest = () => {
  const [titleText, setTitleText] = useState("Bird's Nest");
  const bodyText = "This is not really a bird nest.";

  const onPressTitle = () => {
    setTitleText("Bird's Nest [pressed here ok]");
  };

  return (
    <Text style={styles.baseText}>
      <Text style={styles.titleText} onPress={onPressTitle}>
        {titleText}
        {"\n"}
        {"\n"}
      </Text>
      <Text numberOfLines={5} style={styless.style3}>{bodyText} </Text>
    </Text>
  );
};

const styles = StyleSheet.create({
  baseText: {
    fontFamily: "Cochin"
  },
  titleText: {
    fontSize: 30,
    fontWeight: "bold"
  },
  contentText: {
    fontSize: 20,
    fontWeight: "normal",
    color: "green"
  }
});

const styless = StyleSheet.create({
    style1: {
        color: "red",
        fontWeight: "bold",
        fontSize: 10
    },
    style2: {
        color: "blue",
        fontWeight: "bold",
        fontSize: 15
    },
    style3: {
        color: "orange",
        fontWeight: "bold",
        fontSize: 20
    }
})

export default TextInANest;