import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeSrceen from './components/HomeScreen';
import DetailHome from './components/DetailScreen';

export default function App() {
  const Stack = createStackNavigator();

  return (
    // <Screen01 />
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name='HomeScreen' component={HomeSrceen} />
        <Stack.Screen name='DetailScreen' component={DetailHome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}