
// import { View, Text, StatusBar } from 'react-native'
// import React from 'react'
// // import { NavigationContainer } from '@react-navigation/native'
// // import Home from './Screens/Home'
// // import About from './Screens/About'
// // import Contact from './Screens/Contact'
// // import { createStackNavigator } from '@react-navigation/stack'
// import Stack_Navigation from './config/Stack_Navigation'
// import Tab_Navigation from './config/Tab_Navigation'

// const App = () => {
//   // const Stack = createStackNavigator();
  

//   return (
//     <>
//     {/* <StatusBar backgroundColor='yellow'/> */}

// {/* <Tab_Navigation/> */}
//     <Stack_Navigation/>
//        {/* <NavigationContainer>
//        <Stack.Navigator>
//       <Stack.Screen name="Home" component={Home} />
//       <Stack.Screen name="Notifications" component={About} />
//       <Stack.Screen name="Settings" component={Contact} />
//     </Stack.Navigator>
//        </NavigationContainer> */}
//     </>
//   )
// }

// export default App
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Intro from '../Screens/Intro';
import Login from '../Screens/Login';
import Signup from '../Screens/signup';
import Dashboard from '../Screens/Dashbord';


const Stack = createStackNavigator();

const Stack_Navigation = () => {
  return (<>
     <NavigationContainer>
       <Stack.Navigator initialRouteName="Intro">
         <Stack.Screen options={{headerShown:false}} name="Intro" component={Intro} />
         <Stack.Screen name="Login" component={Login} />
         <Stack.Screen name="Signup" component={Signup} />
         <Stack.Screen options={{headerShown:false}}  name="Dashboard" component={Dashboard} />
       </Stack.Navigator>
     </NavigationContainer>
  </>
  );
};

export default Stack_Navigation;
