import React from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';

const AddScreen = () => (
  <View style={styles.container}>
    <TextInput style={styles.input} placeholder="Search users or institutions..." />
    <Text style={{ textAlign: 'center', marginTop: 20 }}>Nemo wanda zaku fara chat da shi</Text>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 10 },
  input: { backgroundColor: '#f0f0f0', padding: 12, borderRadius: 8 }
});

export default AddScreen;