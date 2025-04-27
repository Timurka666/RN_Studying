import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

export default function DetailsScreen() {
  const { id } = useLocalSearchParams();

    return (
      <View style={styles.container}>
        <Stack.Screen options={{ headerTitle: `${id} details` }} />
        <Text>Details for {id}</Text>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });