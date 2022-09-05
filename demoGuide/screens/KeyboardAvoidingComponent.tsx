import React from 'react';
import { View, KeyboardAvoidingView, TextInput, StyleSheet, Text,
     Platform, TouchableWithoutFeedback, Button, Keyboard,
    SafeAreaView  } from 'react-native';

const KeyboardAvoidingComponent = () => {
  return (
    <SafeAreaView style = {styles.container}>
 
    <KeyboardAvoidingView
      behavior={Platform.OS === "android" ? "height" : "padding"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        
        <View style={styles.inner}>
            
          <Text style={styles.header}>Header</Text>
          <Text style={styles.text}>{Platform.OS}</Text>
          <TextInput placeholder="Username" style={styles.textInput} />
          <View style={styles.btnContainer}>
            <Button title="Submit" onPress={() => null} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: "space-around"
  },
  header: {
    fontSize: 36,
    marginBottom: 48
  },
  textInput: {
    height: 40,
    borderColor: "#000000",
    borderBottomWidth: 1,
    marginBottom: 36
  },
  btnContainer: {
    backgroundColor: "white",
    marginTop: 12
  }
  ,
  text: {
    fontSize: 40,
    fontWeight: '500',
  }
});

export default KeyboardAvoidingComponent;