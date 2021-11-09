import 'react-native-gesture-handler';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import * as React from 'react';
import {
  NavigationContainer
} from '@react-navigation/native';
import {
  createStackNavigator
} from '@react-navigation/stack';
import {
  createBottomTabNavigator
} from '@react-navigation/bottom-tabs';

//importing screens from the pages folder
import HomeScreen from './pages/HomeScreen';
import DetailsScreen from './pages/DetailsScreen';
import Shop from './pages/Shop';
import Profile from './pages/Profile';
import CoursesScreen from './pages/CoursesScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

//stack navigation to enable buttons to be navigable between screens
function HomeStack() {
  return (
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: '#42f44b' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' }
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Home Page' }}/>
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{ title: 'Details Page' }} />
      </Stack.Navigator>
  );
}

// function to enable bottom navigator with Vector expo icons
function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Feed"
        tabBarOptions={{
          activeTintColor: '#ff0000',
        }}>
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Ionicons
                name="home"
                color={color}
                size={size}
              />
            ),
          }}  />
        <Tab.Screen
          name="ShopStack"
          component={Shop}
          options={{
            tabBarLabel: 'Shop',
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons 
                name="shop"
                color={color}
                size={size}
              />
            ),
          }}  />
        <Tab.Screen
          name="CoursesStack"
          component={CoursesScreen}
          options={{
            tabBarLabel: 'Courses',
            tabBarIcon: ({ color, size }) => (
              <Ionicons
                name="bookmarks-outline"
                color={color}
                size={size}
              />
            ),
          }}  />
        <Tab.Screen
          name="ProfileStack"
          component={Profile}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size }) => (
              <Ionicons
                name="person"
                color={color}
                size={size}
              />
            ),
          }}  />  
        </Tab.Navigator>
    </NavigationContainer>
  );
}
export default App;