import Button from "@/components/button";
import { router } from "expo-router";
import { View } from "react-native";
import { StyleSheet } from "react-native-unistyles";

export default function SecondPage() {
  return (
    <View style={styles.page}>
      <Button
        variant="destructive"
        onPress={() => {
          router.back();
        }}
      >
        Descructive
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
