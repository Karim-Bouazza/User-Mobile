import { useRouter } from "expo-router";
import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.replace("/(tabs)/explore");
    }, 5000);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Ryde</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3B82F6",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 80,
    fontWeight: "bold",
    fontStyle: "italic",
    color: "#FFFFFF",
  },
});
