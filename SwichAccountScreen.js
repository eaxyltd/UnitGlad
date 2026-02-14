import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SwitchAccountScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Switch Account</Text>
      
      {/* Current Account */}
      <TouchableOpacity style={styles.accountItem}>
        <Ionicons name="person-circle" size={50} color="#800080" />
        <View style={styles.accountInfo}>
          <Text style={styles.name}>User Name (Current)</Text>
          <Text style={styles.handle}>@username</Text>
        </View>
        <Ionicons name="checkmark-circle" size={24} color="green" />
      </TouchableOpacity>

      {/* Add New Option */}
      <TouchableOpacity style={styles.addBtn}>
        <Ionicons name="add-circle-outline" size={30} color="#800080" />
        <Text style={styles.addText}>Add another account</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 20 },
  accountItem: { flexDirection: 'row', alignItems: 'center', padding: 15, borderRadius: 10, backgroundColor: '#f9f9f9', marginBottom: 15 },
  accountInfo: { flex: 1, marginLeft: 15 },
  name: { fontSize: 16, fontWeight: '600' },
  handle: { color: 'gray' },
  addBtn: { flexDirection: 'row', alignItems: 'center', marginTop: 10, alignSelf: 'center' },
  addText: { marginLeft: 10, color: '#800080', fontWeight: 'bold' }
});