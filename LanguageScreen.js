import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, TextInput } from 'react-native';

const languages = [
  { id: '1', name: 'English' },
  { id: '2', name: 'Hausa' },
  { id: '3', name: 'Arabic' },
  { id: '4', name: 'French' },
];

const LanguageScreen = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.searchBar} placeholder="Search language..." />
      <FlatList
        data={languages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item}>
            <Text style={styles.text}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 15 },
  searchBar: { backgroundColor: '#f0f0f0', padding: 10, borderRadius: 10, marginBottom: 20 },
  item: { paddingVertical: 15, borderBottomWidth: 0.5, borderBottomColor: '#eee' },
  text: { fontSize: 16 }
});

export default LanguageScreen;