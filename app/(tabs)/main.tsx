import { Image } from "expo-image";
import { StyleSheet } from "react-native";

import ParallaxScrollView from "@/components/parallax-scroll-view";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Colors } from "@/constants/theme";
import { useThemeColor } from "@/hooks/use-theme-color";
import { Link } from "expo-router";

export default function HomeScreen() {
  const tint = useThemeColor({}, "tint");
  const icon = useThemeColor({}, "icon");

  return (
    <ParallaxScrollView
      headerBackgroundColor={{
        light: Colors.light.background,
        dark: Colors.dark.background,
      }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={[styles.heroCard, { borderColor: tint }]}>
        <ThemedText type="title">Saha 3idkom ✨</ThemedText>
        <ThemedText type="subtitle">
          A brand-new look for your home page
        </ThemedText>
        <ThemedText>
          Find the best picks faster, discover fresh offers, and jump straight
          into shopping.
        </ThemedText>
      </ThemedView>

      <ThemedView style={[styles.sectionCard, { borderColor: icon }]}>
        <ThemedText type="defaultSemiBold">Today&apos;s focus</ThemedText>
        <ThemedView style={styles.listItem}>
          <ThemedText>• Trending products in your category</ThemedText>
        </ThemedView>
        <ThemedView style={styles.listItem}>
          <ThemedText>• Quick reorder from recent purchases</ThemedText>
        </ThemedView>
        <ThemedView style={styles.listItem}>
          <ThemedText>• Limited-time offers updated daily</ThemedText>
        </ThemedView>
      </ThemedView>

      <ThemedView style={styles.actionsGrid}>
        <ThemedView style={[styles.actionCard, { borderColor: tint }]}>
          <ThemedText type="defaultSemiBold">Start shopping</ThemedText>
          <Link href="/(tabs)/explore">
            <ThemedText type="link">Browse products</ThemedText>
          </Link>
        </ThemedView>

        <ThemedView style={[styles.actionCard, { borderColor: tint }]}>
          <ThemedText type="defaultSemiBold">Special section</ThemedText>
          <Link href="/modal">
            <ThemedText type="link">See latest offers</ThemedText>
          </Link>
        </ThemedView>
      </ThemedView>

      <ThemedView style={[styles.footerCard, { borderColor: icon }]}>
        <ThemedText type="defaultSemiBold">Ready to continue?</ThemedText>
        <ThemedText>
          Your new page design is active. You can now customize products,
          categories, and promotions in this same layout.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  heroCard: {
    gap: 10,
    marginBottom: 16,
    padding: 16,
    borderWidth: 1,
    borderRadius: 18,
  },
  sectionCard: {
    gap: 8,
    marginBottom: 16,
    padding: 16,
    borderWidth: 1,
    borderRadius: 18,
  },
  listItem: {
    paddingVertical: 2,
  },
  actionsGrid: {
    gap: 12,
    marginBottom: 16,
  },
  actionCard: {
    gap: 8,
    padding: 14,
    borderWidth: 1,
    borderRadius: 14,
  },
  footerCard: {
    gap: 10,
    padding: 14,
    borderWidth: 1,
    borderRadius: 14,
    marginBottom: 8,
  },
  reactLogo: {
    height: 168,
    width: 270,
    bottom: 0,
    right: 0,
    position: "absolute",
    opacity: 0.85,
  },
});
