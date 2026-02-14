import React from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native';

const AccountCenterScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.field}>
        <Text style={styles.label}>Username</Text>
        <TextInput style={styles.input} defaultValue="sani_adamu" />
      </View>
      <View style={styles.field}>
        <Text style={styles.label}>Suna</Text>
        <TextInput style={styles.input} defaultValue="Sani Adamu" />
      </View>
      <View style={styles.field}>
        <Text style={styles.label}>Lambar Waya</Text>
        <TextInput style={styles.input} defaultValue="+234 800 000 0000" keyboardType="phone-pad" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  field: { marginBottom: 20 },
  label: { fontSize: 14, color: 'gray', marginBottom: 5 },
  input: { borderBottomWidth: 1, borderBottomColor: '#ccc', paddingVertical: 5, fontSize: 16 }
});

export default AccountCenterScreen;