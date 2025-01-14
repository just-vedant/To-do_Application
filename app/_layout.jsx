import { Stack } from "expo-router";
import { TaskProvider } from "../components/TaskContext";
import { useState } from "react"


export default function RootLayout() {

  const [tasks, setTasks] = useState([]);

  return (
    <TaskProvider value={{ tasks, setTasks }}>
  <Stack>
    <Stack.Screen name="index" options={{ headerShown: false }}/>
    <Stack.Screen name="(tabs)" options={{ headerShown: false }}/>
  </Stack>
  </TaskProvider>);
}

