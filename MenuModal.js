import React from 'react';
import { View, StyleSheet, TouchableOpacity, Modal, Text, ScrollView, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function MenuModal({ visible, onClose, onNavigate }) {
  const menuItems = [
    { name: 'Saved', icon: 'bookmark-outline', action: 'Saved' },
    { name: 'Favourite', icon: 'heart-outline', action: 'Favourite' },
    { name: 'Help', icon: 'help-circle-outline', action: 'Help' },
    // Mun gyara sunan icon din About zuwa 'information-circle-outline'
    { name: 'About', icon: 'information-circle-outline', action: 'About' },
    { name: 'Switch account', icon: 'swap-horizontal-outline', action: 'SwitchAccount' },
    { name: 'Add account', icon: 'person-add-outline', action: 'AddAccount' },
    { name: 'Log out', icon: 'log-out-outline', color: '#ff4444', action: 'Logout' },
  ];

  return (
    <Modal animationType="fade" transparent={true} visible={visible} onRequestClose={onClose}>
      <Pressable style={styles.modalOverlay} onPress={onClose}>
        <View style={styles.menuContainer}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {/* Header na Menu (Zabi ne: don nuna sunan mai account) */}
            <View style={styles.menuHeader}>
              <Text style={styles.userName}>Sani Adamu</Text>
            </View>

            {menuItems.map((item, index) => (
              <TouchableOpacity 
                key={index} 
                style={styles.menuItem} 
                onPress={() => onNavigate(item.action)}
              >
                <Ionicons name={item.icon} size={22} color={item.color || '#333'} />
                <Text style={[styles.menuText, { color: item.color || '#333' }]}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </Pressable>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalOverlay: { 
    flex: 1, 
    backgroundColor: 'rgba(0,0,0,0.2)' // Mun dan kara duhun bayan kadan
  },
  menuContainer: {
    position: 'absolute',
    top: 55, 
    left: 15,
    backgroundColor: 'white',
    borderRadius: 12,
    paddingVertical: 10,
    width: 230,
    elevation: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  menuHeader: {
    paddingHorizontal: 15,
    paddingBottom: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: '#eee',
    marginBottom: 5,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  menuItem: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    paddingVertical: 12, 
    paddingHorizontal: 15 
  },
  menuText: { 
    marginLeft: 15, 
    fontSize: 15, 
    fontWeight: '500' 
  },
});