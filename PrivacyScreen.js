import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';

const PrivacyScreen = () => {
  const [isPrivate, setIsPrivate] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View>
          <Text style={styles.title}>Private Account</Text>
          <Text style={styles.sub}>In ka kunna, sai wadanda ka yarda dasu zasu ga hotunanka.</Text>
        </View>
        <Switch value={isPrivate} onValueChange={setIsPrivate} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20 },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  title: { fontSize: 16, fontWeight: 'bold' },
  sub: { fontSize: 12, color: 'gray', maxWidth: '80%' }
});

export default PrivacyScreen;