import React from "react";
import { StyleSheet, Text, View } from "react-native";
import TodoItem from "./components/TodoItem";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Todo List</Text>
      <TodoItem text="Learn React Native" />
      <TodoItem text="Build a static UI" />
      <TodoItem text="Practice with StyleSheet" />
      <TodoItem text="Commit your code to main" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "#f2f2f2",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 24,
    textAlign: "center",
  },
});


