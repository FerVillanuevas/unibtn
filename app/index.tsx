import Button from "@/components/button";
import { router } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 10
      }}
    >
      <Button
        onPress={() => {
          router.push("/second");
        }}
      >
        Next, this will be descructive
      </Button>

      <Button
        variant="secondary"
        onPress={() => {
          router.push("/modal");
        }}
      >
        Modal, this will become into outline
      </Button>
    </View>
  );
}
