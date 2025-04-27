import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs, useLocalSearchParams } from 'expo-router';

export default function TabLayout() {
    const { user } = useLocalSearchParams();
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
        }}
      />
      <Tabs.Screen
        name="[user]"
        options={{
            title: `User ${user}`,
            tabBarIcon: ({ color }) => <FontAwesome size={28} name="compass" color={color} />,
            href: './Timurka',
        }}
        />
    </Tabs>
  );
}