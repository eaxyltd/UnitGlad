import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

export default function SavedScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Saved Posts & Reels</Text>
      <View style={styles.emptyState}>
        <Text>Babu abubuwan da ka yi saving a halin yanzu.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20, color: '#800080' },
  emptyState: { flex: 1, justifyContent: 'center', alignItems: 'center' }
});