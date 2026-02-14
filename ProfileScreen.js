import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Image, 
  TouchableOpacity, 
  ScrollView, 
  Dimensions,
  Modal
} from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const ProfileScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <ScrollView style={styles.container}>
      
      {/* 1. Sashen Hoton Profile da Kididdiga */}
      <View style={styles.headerSection}>
        <View style={styles.imageContainer}>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Image 
              source={{ uri: 'https://via.placeholder.com' }} // Saka link din hotonka a nan
              style={styles.profileImage} 
            />
            <View style={styles.addButton}>
              <Ionicons name="add-circle" size={24} color="#800080" />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>42</Text>
            <Text style={styles.statLabel}>Posts</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>2.5k</Text>
            <Text style={styles.statLabel}>Followers</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>180</Text>
            <Text style={styles.statLabel}>Following</Text>
          </View>
        </View>
      </View>

      {/* 2. Sunan Mutum da Bio */}
      <View style={styles.bioSection}>
        <Text style={styles.nameText}>Sunanka / Business Name</Text>
        <Text style={styles.bioText}>React Native Developer ?? | Creative Mind ?</Text>
        <TouchableOpacity>
          <Text style={styles.linkText}>www.yourwebsite.com</Text>
        </TouchableOpacity>
      </View>

      {/* 3. Buttons (Edit/Share) - Purple Style */}
      <View style={styles.buttonRow}>
        <TouchableOpacity style={[styles.button, { backgroundColor: '#800080' }]}>
          <Text style={[styles.buttonText, { color: '#fff' }]}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, { borderColor: '#800080', borderWidth: 1 }]}>
          <Text style={[styles.buttonText, { color: '#800080' }]}>Share Profile</Text>
        </TouchableOpacity>
      </View>

      {/* 4. Tab Icons (Grid vs Tagged) */}
      <View style={styles.gridHeader}>
        <TouchableOpacity style={styles.activeGridTab}>
          <Ionicons name="grid" size={22} color="#800080" />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialCommunityIcons name="account-outline" size={26} color="gray" />
        </TouchableOpacity>
      </View>

      {/* 5. Misalin Posts (Grid View) */}
      <View style={styles.postGrid}>
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <View key={item} style={styles.postPlaceholder}>
             <MaterialCommunityIcons name="image" size={30} color="#eee" />
          </View>
        ))}
      </View>

      {/* MODAL: Idan an danna hoton profile ya fito fili */}
      <Modal visible={modalVisible} transparent={true} animationType="fade">
        <View style={styles.modalBackground}>
          <TouchableOpacity style={styles.closeArea} onPress={() => setModalVisible(false)} />
          <View style={styles.modalContent}>
            <Image source={{ uri: 'https://via.placeholder.com' }} style={styles.fullImage} />
            <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
              <Ionicons name="close-circle" size={40} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  headerSection: { flexDirection: 'row', alignItems: 'center', padding: 20, marginTop: 10 },
  imageContainer: { position: 'relative' },
  profileImage: { width: 90, height: 90, borderRadius: 45, borderWidth: 2, borderColor: '#800080' },
  addButton: { position: 'absolute', bottom: 0, right: 0, backgroundColor: '#fff', borderRadius: 12 },
  statsContainer: { flex: 1, flexDirection: 'row', justifyContent: 'space-around', marginLeft: 15 },
  statBox: { alignItems: 'center' },
  statNumber: { fontSize: 18, fontWeight: 'bold', color: '#000' },
  statLabel: { fontSize: 13, color: 'gray' },
  bioSection: { paddingHorizontal: 20, marginBottom: 20 },
  nameText: { fontWeight: 'bold', fontSize: 17, color: '#000' },
  bioText: { fontSize: 14, color: '#444', marginTop: 4, lineHeight: 20 },
  linkText: { color: '#0000FF', marginTop: 4, fontWeight: '500' },
  buttonRow: { flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, gap: 10 },
  button: { flex: 1, height: 38, borderRadius: 8, justifyContent: 'center', alignItems: 'center' },
  buttonText: { fontWeight: 'bold', fontSize: 14 },
  gridHeader: { flexDirection: 'row', justifyContent: 'space-around', marginTop: 25, borderTopWidth: 0.5, borderTopColor: '#ddd', paddingVertical: 10 },
  activeGridTab: { borderBottomWidth: 2, borderBottomColor: '#800080', paddingBottom: 5, flex: 1, alignItems: 'center' },
  postGrid: { flexDirection: 'row', flexWrap: 'wrap' },
  postPlaceholder: { 
    width: width / 3 - 2, 
    height: width / 3 - 2, 
    backgroundColor: '#f8f8f8', 
    margin: 1, 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  // Modal Styles
  modalBackground: { flex: 1, backgroundColor: 'rgba(0,0,0,0.9)', justifyContent: 'center', alignItems: 'center' },
  modalContent: { alignItems: 'center' },
  fullImage: { width: 320, height: 320, borderRadius: 10 },
  closeArea: { position: 'absolute', width: '100%', height: '100%' },
  closeButton: { marginTop: 20 }
});

export default ProfileScreen;