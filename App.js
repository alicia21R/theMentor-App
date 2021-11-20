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
import Shop from './pages/Shop';
import Profile from './pages/Profile';
import ResourcesScreen from './pages/ResourcesScreen';
import CoursesScreen from './pages/CoursesScreen';
import OpportunitiesScreen from './pages/OpportunitiesScreen';



const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

//stack navigation to enable buttons to be navigable between screens
function CoursesStack() {
  return (
      <Stack.Navigator
        initialRouteName="Courses"
        screenOptions={{
          headerStyle: { backgroundColor: '#fff' },
          headerTintColor: '#000000',
          headerTitleStyle: { fontWeight: 'bold' }
        }}>
        <Stack.Screen
          name="Courses"
          component={CoursesScreen}
          options={{ title: 'Courses Page' }}/>
        <Stack.Screen
          name="Resources"
          component={ResourcesScreen}
          options={{ title: 'Resources Page' }} />
        <Stack.Screen
          name="Opportunities"
          component={OpportunitiesScreen}
          options={{ title: 'Opportunities Page' }} />
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
          component={HomeScreen}
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
          component={CoursesStack}
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