// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome6'; // Importing FontAwesome icon

// const Login = ({ navigation }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = () => {
//     // Example login logic, you can replace it with actual API call.
//     if (email && password) {
//       // Redirect to the Dashboard or Home screen after successful login
//       navigation.navigate('Dashboard'); // Assuming you have a Dashboard screen
//     } else {
//       alert('Please enter both email and password');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       {/* Logo Icon */}
//       <Icon name="react" size={100} color="#860fce" style={styles.icon} />

//       {/* Login Heading */}
//       <Text style={styles.title}>Welcome back.</Text>

//       {/* Email Input */}
//       <TextInput
//         style={styles.input}
//         placeholder="Enter your email"
//         value={email}
//         onChangeText={setEmail}
//         keyboardType="email-address"
//         autoCapitalize="none"
//         placeholderTextColor="#707070" // Placeholder color set to light black
//       />

//       {/* Password Input */}
//       <TextInput
//         style={styles.input}
//         placeholder="Enter your password"
//         value={password}
//         onChangeText={setPassword}
//         secureTextEntry
//         placeholderTextColor="#707070" // Placeholder color set to light black
//       />

//       {/* Forget Password Link */}
//       <View style={styles.forgotPasswordContainer}>
//         <TouchableOpacity onPress={() => alert('Redirect to Forgot Password Screen')}>
//           <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Login Button */}
//       <TouchableOpacity style={styles.button} onPress={handleLogin}>
//         <Text style={styles.buttonText}>Login</Text>
//       </TouchableOpacity>

//       {/* Signup Button */}
//       <TouchableOpacity
//         // style={styles.button2}
//         onPress={() => navigation.navigate('Signup')}
//       >
//         <Text style={styles.buttonText2}>Don't have an account? Sign Up</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   icon: {
//     marginBottom: 30, // Icon ke neeche margin
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 30,
//     color: '#6725d3',
//   },
//   input: {
//     width: '80%',
//     padding: 10,
//     marginVertical: 10,
//     borderWidth: 1,
//     borderColor: '#707070',
//     borderRadius: 5,
//     fontSize: 16,
//     color:'#707070'
//   },
//   button: {
//     backgroundColor: '#6725d3', // Button ka background color
//     paddingVertical: 12,
//     paddingHorizontal: 30,
//     borderRadius: 5,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginTop: 20,
//     width: '80%',
//   },
//   buttonText: {
//     color: '#FFFFFF', // Button text ka color
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// //   button2: {
// //     borderWidth: 2, // Border ka thickness
// //     borderColor: '#6725d3', // Border ka color
// //     paddingVertical: 12,
// //     paddingHorizontal: 30,
// //     borderRadius: 5,
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //     marginTop: 20,
// //     width: '80%',
// //   },
//   buttonText2: {
//     color: '#6725d3', // Button text ka color
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   forgotPasswordContainer: {
//     width: '80%',
//     alignItems: 'flex-end', // Align "Forgot Password" to the right
//     // marginVertical: 1,
//   },
//   forgotPasswordText: {
//     color: '#707070',
//     fontSize: 14,
//     fontWeight: 'bold',
//   },
// });

// export default Login;
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6'; // Importing FontAwesome icon

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Example login logic, you can replace it with actual API call.
    if (email && password) {
      // Redirect to the Dashboard or Home screen after successful login
      navigation.navigate('Dashboard'); // Assuming you have a Dashboard screen
    } else {
      alert('Please enter both email and password');
    }
  };

  return (
    <View style={styles.container}>
      {/* Logo Icon */}
      <Icon name="react" size={100} color="#860fce" style={styles.icon} />

      {/* Login Heading */}
      <Text style={styles.title}>Welcome back.</Text>

      {/* Email Input */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        placeholderTextColor="#707070" // Placeholder color set to light black
      />

      {/* Password Input */}
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        placeholderTextColor="#707070" // Placeholder color set to light black
      />

      {/* Forget Password Link */}
      <View style={styles.forgotPasswordContainer}>
        <TouchableOpacity onPress={() => alert('Redirect to Forgot Password Screen')}>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>

      {/* Login Button */}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      {/* Sign Up Button */}
      <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.buttonText2}>
          <Text style={styles.buttonTextBlack}>Don't have an account? </Text>
          <Text style={styles.buttonTextSignUp}>Sign Up</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  icon: {
    marginBottom: 30, // Icon ke neeche margin
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#6725d3',
  },
  input: {
    width: '80%',
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#707070',
    borderRadius: 5,
    fontSize: 16,
    color: '#707070',
  },
  button: {
    backgroundColor: '#6725d3', // Button ka background color
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    width: '80%',
  },
  buttonText: {
    color: '#FFFFFF', // Button text ka color
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonText2: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  buttonTextBlack: {
    color: 'black', // "Don't have an account?" text color black
  },
  buttonTextSignUp: {
    color: '#6725d3', // "Sign Up" text color remains the same
  },
  forgotPasswordContainer: {
    width: '80%',
    alignItems: 'flex-end', // Align "Forgot Password" to the right
  },
  forgotPasswordText: {
    color: '#707070',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default Login;
