import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function User() {
    const { user } = useLocalSearchParams();
    return <View><Text>{user}</Text></View>
};
