import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function FavouriteScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="heart" size={40} color="#ff4444" />
        <Text style={styles.title}>Favourite Items</Text>
      </View>
      <View style={styles.emptyState}>
        <Text style={styles.emptyText}>Babu abubuwan da ka saka a favourite a halin yanzu.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20 },
  header: { alignItems: 'center', marginBottom: 30 },
  title: { fontSize: 22, fontWeight: 'bold', marginTop: 10, color: '#333' },
  emptyState: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  emptyText: { color: 'gray', textAlign: 'center' }
});