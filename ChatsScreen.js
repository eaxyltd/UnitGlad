import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const ChatsScreen = () => {
  const dummyChats = [{ id: '1', name: 'Sani Adamu', msg: 'Yaushe zamu hadu?' }];
  
  return (
    <View style={styles.container}>
      <FlatList 
        data={dummyChats}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.chatBox}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.msg}>{item.msg}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  chatBox: { padding: 15, borderBottomWidth: 0.5, borderColor: '#eee' },
  name: { fontWeight: 'bold', fontSize: 16 },
  msg: { color: 'gray' }
});

export default ChatsScreen;