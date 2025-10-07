import React from "react";
import { StyleSheet, Text, View } from "react-native";

type Props = {
  text: string;
};

export default function TodoItem({ text }: Props) {
  return (
    <View style={styles.item}>
      <Text style={styles.itemText}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  itemText: {
    fontSize: 16,
  },
});
