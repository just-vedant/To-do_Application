import React, { useState, useEffect } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebaseconfig"; 
import { useRouter } from "expo-router";

const ProtectedRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true); 
      } else {
        setIsAuthenticated(false);
        router.push("/login"); 
      }
      setLoading(false);
    });

    return () => unsubscribe(); 
  }, [router]);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
        <Text>Checking Authentication...</Text>
      </View>
    );
  }

  return <>{isAuthenticated ? children : null}</>;
};

export default ProtectedRoute;
