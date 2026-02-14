import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert } from 'react-native';

const blockedUsers = [{ id: '1', name: 'User 1' }, { id: '2', name: 'User 2' }];

const BlockedScreen = () => {
  const unblockAlert = (name) => {
    Alert.alert("Unblock", `Kana son cire ${name} daga block?`,);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={blockedUsers}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item} onPress={() => unblockAlert(item.name)}>
            <Text style={styles.text}>{item.name}</Text>
            <Text style={styles.unblockText}>Unblock</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  item: { flexDirection: 'row', justifyContent: 'space-between', padding: 20, borderBottomWidth: 0.5, borderBottomColor: '#eee' },
  text: { fontSize: 16 },
  unblockText: { color: 'blue' }
});

export default BlockedScreen;