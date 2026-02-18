import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, StatusBar, Alert, Platform } from 'react-native';
import { NavigationContainer, createNavigationContainerRef } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

// --- IMPORT SCREENS ---
import SplashScreen from './screens/SplashScreen';
import AddAccountScreen from './screens/AddAccountScreen';
import OtpVerifyScreen from './screens/OtpVerifyScreen';
import ConfirmAccountScreen from './screens/ConfirmAccountScreen';

// Main Screens
import ChatsScreen from './screens/ChatsScreen';
import AddScreen from './screens/AddScreen';
import NewsScreen from './screens/NewsScreen';
import ProfileScreen from './screens/ProfileScreen';
import SavedScreen from './screens/SavedScreen';
import FavouriteScreen from './screens/FavouriteScreen';
import HelpScreen from './screens/HelpScreen'; 
import AboutScreen from './screens/AboutScreen'; 

// New Screens for Settings
import AccountCenterScreen from './screens/AccountCenterScreen';
import LanguageScreens from './screens/LanguageScreen';
import PrivacyScreen from './screens/PrivacyScreen';
import BlockedScreens from './screens/BlockedScreen';

// Import Modals
import MenuModal from './MenuModal';
import SettingsModal from './SettingsModal';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const navigationRef = createNavigationContainerRef();

// Aikin sauya shafi
function navigate(name, params) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}

// --- 1. HEADER COMPONENT ---
const CustomHeader = ({ onOpenMenu, onOpenSettings, isDarkMode }) => (
  <View style={[styles.header, { backgroundColor: isDarkMode ? '#121212' : '#fff', borderBottomColor: isDarkMode ? '#333' : '#eee' }]}>
    <TouchableOpacity onPress={onOpenMenu}>
      <Ionicons name="menu" size={28} color={isDarkMode ? "white" : "black"} />
    </TouchableOpacity>

    <TouchableOpacity onPress={onOpenSettings}>
      <MaterialCommunityIcons name="dots-vertical" size={28} color={isDarkMode ? "white" : "black"} />
    </TouchableOpacity>
  </View>
);

// --- 2. BOTTOM TAB NAVIGATOR ---
function MainTabs({ isDarkMode }) {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: isDarkMode ? '#bb86fc' : '#800080', 
        tabBarInactiveTintColor: 'gray',
        tabBarLabelStyle: { fontSize: 12, fontWeight: 'bold' },
        tabBarStyle: { backgroundColor: isDarkMode ? '#121212' : '#fff', borderTopWidth: 0, elevation: 0 },
      }}
    >
      <Tab.Screen name="Chats" component={ChatsScreen} 
        options={{ tabBarIcon: ({ color }) => <Ionicons name="chatbubble" size={24} color={color} /> }} 
      />
      <Tab.Screen name="+" component={AddScreen} 
        options={{ tabBarLabel: '', tabBarIcon: ({ color }) => <Ionicons name="add-circle" size={32} color={color} /> }} 
      />
      <Tab.Screen name="News" component={NewsScreen} 
        options={{ tabBarIcon: ({ color }) => <Ionicons name="newspaper" size={24} color={color} /> }} 
      />
      <Tab.Screen name="Profile" component={ProfileScreen} 
        options={{ tabBarIcon: ({ color }) => <Ionicons name="person" size={24} color={color} /> }} 
      />
    </Tab.Navigator>
  );
}

// --- 3. WRAPPER FOR MAIN CONTENT ---
function MainScreenWrapper({ isDarkMode, setIsDarkMode }) {
  const [menuVisible, setMenuVisible] = useState(false);
  const [settingsVisible, setSettingsVisible] = useState(false);

  const handleMenuAction = (action) => {
    setMenuVisible(false);
    if (action === 'Logout') {
        Alert.alert("Log Out", "Are you sure?");
    } else {
      navigate(action);
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: isDarkMode ? '#121212' : '#fff' }}>
      <CustomHeader 
        onOpenMenu={() => setMenuVisible(true)} 
        onOpenSettings={() => setSettingsVisible(true)} 
        isDarkMode={isDarkMode}
      />
      
      <MenuModal 
        visible={menuVisible} 
        onClose={() => setMenuVisible(false)} 
        onNavigate={handleMenuAction} 
      />
      
      <SettingsModal 
        visible={settingsVisible} 
        onClose={() => setSettingsVisible(false)} 
        onNavigate={(screen) => navigate(screen)} // GYARA: Mun tura onNavigate yanzu
        isDarkMode={isDarkMode}
        toggleDarkMode={() => setIsDarkMode(!isDarkMode)}
      />

      <MainTabs isDarkMode={isDarkMode} />
    </View>
  );
}

// --- 4. MAIN APP COMPONENT ---
export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <NavigationContainer ref={navigationRef}>
      <View style={[styles.mainContainer, { backgroundColor: isDarkMode ? '#121212' : '#fff' }]}>
        <StatusBar 
            barStyle={isDarkMode ? "light-content" : "dark-content"} 
            backgroundColor="transparent" 
            translucent={true} 
        />

        <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="AddAccount" component={AddAccountScreen} />
          <Stack.Screen name="OtpVerify" component={OtpVerifyScreen} />
          <Stack.Screen name="ConfirmAccount" component={ConfirmAccountScreen} />

          {/* Main App me Header da Tabs */}
          <Stack.Screen name="Main">
            {props => <MainScreenWrapper {...props} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />}
          </Stack.Screen>

          {/* Settings Screens */}
          <Stack.Screen name="AccountCenterScreen" component={AccountCenterScreen} options={{ headerShown: true, title: 'Account Center' }} />
          <Stack.Screen name="LanguageScreens" component={LanguageScreens} options={{ headerShown: true, title: 'Language' }} />
          <Stack.Screen name="PrivacyScreen" component={PrivacyScreen} options={{ headerShown: true, title: 'Privacy' }} />
          <Stack.Screen name="BlockedScreens" component={BlockedScreens} options={{ headerShown: true, title: 'Blocked' }} />

          {/* Other Screens */}
          <Stack.Screen name="Saved" component={SavedScreen} options={{ headerShown: true, title: 'Saved Items' }} />
          <Stack.Screen name="Favourite" component={FavouriteScreen} options={{ headerShown: true, title: 'Favourites' }} />
          <Stack.Screen name="Help" component={HelpScreen} options={{ headerShown: true, title: 'Help & Support' }} />
          <Stack.Screen name="About" component={AboutScreen} options={{ headerShown: true, title: 'About App' }} />
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  mainContainer: { flex: 1 },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingTop: Platform.OS === 'android' ? 45 : 20, 
    paddingBottom: 15,
    borderBottomWidth: 0.5,
  },
});