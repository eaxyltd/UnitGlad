import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function AboutScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>About UnitGlad</Text>
      <Text style={styles.content}>
        UnitGlad app ne na kamfanin Eaxy. An samar da shi ne don sau?a?a rayuwa da ha?a mutane da hukumomi kamar gwamnati, makarantu, bankuna da sauran su don magance musu matsalolinsu.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', color: '#800080', marginBottom: 15 },
  content: { fontSize: 16, lineHeight: 24, color: '#444' }
});