import React, { useContext } from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";
import TaskItem from "../../components/taskItem";
import { TaskContext } from "../../components/TaskContext";

export default function CompletedTasks() {
  const { tasks, setTasks } = useContext(TaskContext);

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks.filter((task) => task.completed)}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TaskItem task={item} onDelete={deleteTask} />
        )}
        ListEmptyComponent={
          <Text style={styles.emptyListText}>No completed tasks yet!</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f7f8fc",
  },
  emptyListText: {
    textAlign: "center",
    color: "#aaa",
    fontSize: 16,
    marginTop: 20,
  },
});
