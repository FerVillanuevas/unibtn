import Button from "@/components/button";
import { router } from "expo-router";
import { View } from "react-native";
import { StyleSheet } from "react-native-unistyles";

export default function ModalPage() {
  return (
    <View style={styles.page}>
      <Button
        variant="outline"
        onPress={() => {
          router.back();
        }}
      >
        outline
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
