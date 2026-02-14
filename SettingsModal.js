import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Modal, Text, Switch, Pressable } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

export default function SettingsModal({ visible, onClose, onNavigate }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Aikin tura mutum zuwa shafi da kuma rufe modal din
  const handlePress = (screen) => {
    onNavigate(screen);
    onClose();
  };

  return (
    <Modal animationType="fade" transparent={true} visible={visible} onRequestClose={onClose}>
      <Pressable style={styles.modalOverlay} onPress={onClose}>
        {/* Shi wannan View din yana hana modal din rufewa idan an danna cikin sa */}
        <Pressable style={styles.settingsContainer}>
          <Text style={styles.title}>Settings</Text>

          {/* Account Center */}
          <TouchableOpacity 
            style={styles.settingItem} 
            onPress={() => handlePress('AccountCenter')}
          >
            <View style={styles.leftRow}>
              <Ionicons name="person-circle-outline" size={22} color="#333" />
              <Text style={styles.settingText}>Account Center</Text>
            </View>
            <Ionicons name="chevron-forward" size={18} color="gray" />
          </TouchableOpacity>

          {/* Dark Mode */}
          <View style={styles.settingItem}>
            <View style={styles.leftRow}>
              <MaterialCommunityIcons name="theme-light-dark" size={22} color="#333" />
              <Text style={styles.settingText}>Dark Mode</Text>
            </View>
            <Switch 
              value={isDarkMode} 
              onValueChange={(value) => setIsDarkMode(value)} 
              trackColor={{ false: "#767577", true: "#800080" }}
            />
          </View>

          {/* Language */}
          <TouchableOpacity 
            style={styles.settingItem} 
            onPress={() => handlePress('Language')}
          >
            <View style={styles.leftRow}>
              <Ionicons name="language-outline" size={22} color="#333" />
              <Text style={styles.settingText}>Language</Text>
            </View>
            <Text style={styles.subText}>Hausa</Text>
          </TouchableOpacity>

          {/* Account Privacy */}
          <TouchableOpacity 
            style={styles.settingItem} 
            onPress={() => handlePress('Privacy')}
          >
            <View style={styles.leftRow}>
              <Ionicons name="lock-closed-outline" size={22} color="#333" />
              <Text style={styles.settingText}>Account Privacy</Text>
            </View>
            <Ionicons name="chevron-forward" size={18} color="gray" />
          </TouchableOpacity>

          {/* Blocked */}
          <TouchableOpacity 
            style={[styles.settingItem, { borderBottomWidth: 0 }]} 
            onPress={() => handlePress('Blocked')}
          >
            <View style={styles.leftRow}>
              <Ionicons name="ban-outline" size={22} color="#333" />
              <Text style={styles.settingText}>Blocked</Text>
            </View>
          </TouchableOpacity>
        </Pressable>
      </Pressable>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalOverlay: { 
    flex: 1, 
    backgroundColor: 'rgba(0,0,0,0.1)' 
  },
  settingsContainer: {
    position: 'absolute',
    top: 50,
    right: 15,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 15,
    width: 260,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
  },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 15, color: '#800080' },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 0.3,
    borderBottomColor: '#eee',
  },
  leftRow: { flexDirection: 'row', alignItems: 'center' },
  settingText: { marginLeft: 12, fontSize: 15, fontWeight: '500' },
  subText: { fontSize: 13, color: 'gray' }
});