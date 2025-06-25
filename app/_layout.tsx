import { Tabs } from 'expo-router/tabs';

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#0b2b33',
        tabBarInactiveTintColor: '#aaa',
      }}
    >
      <Tabs.Screen name="index" options={{ title: 'Início' }} />
      <Tabs.Screen name="imc" options={{ title: 'Calcular IMC' }} />
      <Tabs.Screen name="profile" options={{ title: 'Perfil' }} />
    </Tabs>
  );
}