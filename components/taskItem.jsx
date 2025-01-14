import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function TaskItem({ task, onDelete, onToggleCompletion }) {
  return (
    <View style={styles.taskItem}>
      <Text style={styles.taskText}>{task.name}</Text>
      <View style={styles.buttons}>
        {!task.completed && (
          <Button title="Done" onPress={() => onToggleCompletion(task.id)} />
        )}
        <Button title="Delete" onPress={() => onDelete(task.id)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  taskItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
  },
  taskText: {
    fontSize: 16,
    flex: 1,
  },
  buttons: {
    flexDirection: "row",
    gap: 10,
  },
});
