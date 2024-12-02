import Button from "@/components/button";
import { router } from "expo-router";
import { View } from "react-native-reanimated/lib/typescript/Animated";

export default function SecondPage() {
    return <View>
        <Button variant="destructive" onPress={() => {
            router.back()
        }}>Descructive</Button>
    </View>
}