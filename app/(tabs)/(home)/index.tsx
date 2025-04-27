import { Link, Stack } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ header: () => <Text>Home</Text>, headerTitle: 'Home page'  }} />
      <Text>Home</Text>
      <Link href={{ pathname: '/details/[id]', params: { id: 1 } }}>to details 1</Link>
      <Link href={{ pathname: '/details/[id]', params: { id: 2 } }}>to details 2</Link>
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