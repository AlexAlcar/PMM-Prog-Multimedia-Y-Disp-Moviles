import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Pantalla1 from './components/Pantalla1'; 
import Pantalla2 from './components/Pantalla2'; 
import Pantalla3 from './components/Pantalla3'; 
import Pantalla4 from './components/Pantalla4'; 

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Modal" component={Pantalla1} />
        <Tab.Screen name="Stack" component={Pantalla2} />
        <Tab.Screen name="API 1" component={Pantalla3} />
        <Tab.Screen name="API 2" component={Pantalla4} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
