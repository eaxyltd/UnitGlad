import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function HelpScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Eaxy AI Help</Text>
      </View>
      <ScrollView style={styles.chatArea}>
        <View style={styles.aiBubble}>
          <Text style={styles.aiText}>Hi, I am Eaxy. How can I help you today regarding UnitGlad?</Text>
        </View>
      </ScrollView>
      <View style={styles.inputArea}>
        <TextInput style={styles.input} placeholder="Rubuta tambayarka..." />
        <TouchableOpacity style={styles.sendBtn}>
          <Ionicons name="send" size={24} color="#800080" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  header: { padding: 20, backgroundColor: '#800080', alignItems: 'center' },
  headerText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  chatArea: { flex: 1, padding: 15 },
  aiBubble: { backgroundColor: '#fff', padding: 15, borderRadius: 15, maxWidth: '80%', elevation: 2 },
  aiText: { fontSize: 15, color: '#333' },
  inputArea: { flexDirection: 'row', padding: 10, backgroundColor: '#fff', alignItems: 'center' },
  input: { flex: 1, backgroundColor: '#eee', borderRadius: 20, paddingHorizontal: 15, height: 40 },
  sendBtn: { marginLeft: 10 }
});