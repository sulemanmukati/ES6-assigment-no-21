// import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../Screens/Home'
import About from '../Screens/About'
import Contact from '../Screens/Contact'
import Icon from "react-native-vector-icons/AntDesign"

const Tab_Navigation = () => {
const Tab = createBottomTabNavigator()

  return (
  <>
  <Tab.Navigator screenOptions={{
    tabBarActiveTintColor:"blue",
    tabBarInactiveTintColor:'black',
    tabBarActiveBackgroundColor: '#e5e3e3'
  }}>
        <Tab.Screen options={{
            headerTitleAlign:'center',
            tabBarIcon:({color})=>{
                return <Icon name="home" size={25} color={color}/>
            }
        }} name="Home" component={Home} />
        <Tab.Screen options={{
            headerTitleAlign:'center',
            tabBarIcon:({color})=>{
                return <Icon name="infocirlceo" size={25} color={color}/>
            }
        }} name="Category" component={About} />
        <Tab.Screen options={{
            headerTitleAlign:'center',

            tabBarIcon:({color})=>{
                return <Icon name="contacts" size={25} color={color}/>
            }
        }} name="Account" component={Contact} />

      </Tab.Navigator>
  </>
  )
}

export default Tab_Navigation

// Tab_Navigation.js

// import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// // import HomeScreen from '../screens/HomeScreen';  // Example Home Screen
// // import ProfileScreen from '../screens/ProfileScreen';  // Example Profile Screen
// // import SettingsScreen from '../screens/SettingsScreen';  // Example Settings Screen
// import { Ionicons } from 'react-native-vector-icons';
// import Home from '../Screens/Home';
// import About from '../Screens/About';
// import Contact from '../Screens/Contact';
// import { NavigationContainer } from '@react-navigation/native';

// const Tab = createBottomTabNavigator();

// const Tab_Navigation = () => {
//   return (
//    <NavigationContainer>
//      <Tab.Navigator>
//       <Tab.Screen
//         name="Home"
//         component={Home}
//         options={{
//           tabBarIcon: ({ color, size }) => (
//             <Ionicons name="home" size={size} color={color} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Profile"
//         component={About}
//         options={{
//           tabBarIcon: ({ color, size }) => (
//             <Ionicons name="person" size={size} color={color} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Settings"
//         component={Contact}
//         options={{
//           tabBarIcon: ({ color, size }) => (
//             <Ionicons name="settings" size={size} color={color} />
//           ),
//         }}
//       />
//     </Tab.Navigator>
//    </NavigationContainer>
//   );
// };

// export default Tab_Navigation;
