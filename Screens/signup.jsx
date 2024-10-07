import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6'; // Importing FontAwesome icon

const Signup = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    // Example signup logic, you can replace it with actual API call.
    if (name && email && password) {
      // Redirect to the Dashboard or Home screen after successful signup
      navigation.navigate('Dashboard'); // Assuming you have a Dashboard screen
    } else {
      alert('Please fill all fields');
    }
  };

  return (
    <View style={styles.container}>
      {/* Logo Icon */}
      <Icon name="react" size={100} color="#860fce" style={styles.icon} />

      {/* Sign Up Heading */}
      <Text style={styles.title}>Create Account</Text>

      {/* Name Input */}
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
        placeholderTextColor="#707070" // Placeholder color set to light black
      />

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

      {/* Sign Up Button */}
      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      {/* Login Button */}
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText2}>
          <Text style={styles.buttonTextBlack}>Already have an account? </Text>
          <Text style={styles.buttonTextSignUp}>Login</Text>
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
    color: 'black', // "Already have an account?" text color black
  },
  buttonTextSignUp: {
    color: '#6725d3', // "Login" text color remains the same (purple)
  },
});

export default Signup;
