import { Stack, Tabs } from "expo-router";
import ProtectedRoutes from "../ProtectedRoutes";
import { Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
  return (
  <ProtectedRoutes>
    <Tabs 
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopColor: "#ddd",
          elevation: 5, 
        },
        tabBarActiveTintColor: "#4CAF50",
        tabBarInactiveTintColor: "#888", 
        headerShown: false,
      }}>
    <Tabs.Screen name="completedTasks"
        options={{
          tabBarLabel: "Completed Tasks",
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "checkmark-circle" : "checkmark-circle-outline"}
              size={size}
              color={color}
            />
          ),
        }}/>
    <Tabs.Screen name="todoList"
        options={{
          tabBarLabel: "To-Do",
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "list-circle" : "list-circle-outline"}
              size={size}
              color={color}
            />
          ),
        }}/>
    <Tabs.Screen name="index" options={{headerShown:false,tabBarStyle:{display:"none"}}}/>
  </Tabs>
  </ProtectedRoutes>
  );
}