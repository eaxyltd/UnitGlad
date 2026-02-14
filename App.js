import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, SafeAreaView, StatusBar, Alert, Platform } from 'react-native';
import { NavigationContainer, createNavigationContainerRef } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

// Import Modals
import MenuModal from './MenuModal';
import SettingsModal from './SettingsModal';

// Import Screens (Tabbatar wadannan files din suna cikin folder din screens)
import ChatsScreen from './screens/ChatsScreen';
import AddScreen from './screens/AddScreen';
import NewsScreen from './screens/NewsScreen';
import ProfileScreen from './screens/ProfileScreen';
import SavedScreen from './screens/SavedScreen';
import FavouriteScreen from './screens/FavouriteScreen';
import HelpScreen from './screens/HelpScreen'; 
import AboutScreen from './screens/AboutScreen'; 
import AccountCenterScreen from './screens/AccountCenterScreen';
import LanguageScreen from './screens/LanguageScreen';
import PrivacyScreen from './screens/PrivacyScreen';
import BlockedScreen from './screens/BlockedScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const navigationRef = createNavigationContainerRef();

// Aikin sauya shafi daga wajen Navigator
function navigate(name, params) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}

export default function App() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [settingsVisible, setSettingsVisible] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false); // Tsarin Dark Mode

  // Launukan app dangane da yanayin Dark Mode
  const theme = {
    backgroundColor: isDarkMode ? '#121212' : '#fff',
    textColor: isDarkMode ? '#fff' : '#000',
    headerColor: isDarkMode ? '#1e1e1e' : '#fff',
  };

  // Aikin Logout
  const handleLogout = () => {
    setMenuVisible(false);
    Alert.alert("Log Out", "Are you sure you want to log out?");
  };

  // Sarrafa danna Menu Item
  const handleMenuAction = (action) => {
    setMenuVisible(false);
    if (action === 'Logout') {
      handleLogout();
    } else {
      navigate(action);
    }
  };

  // Bottom Tab Navigator
  function MainTabs() {
    return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#800080', 
          tabBarInactiveTintColor: 'gray',
          tabBarLabelStyle: { fontSize: 12, fontWeight: 'bold' },
          tabBarStyle: { backgroundColor: theme.backgroundColor, borderTopWidth: 0, elevation: 0 },
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

  return (
    <NavigationContainer ref={navigationRef}>
      <SafeAreaView style={[styles.mainContainer, { backgroundColor: theme.backgroundColor }]}>
        <StatusBar 
          barStyle={isDarkMode ? "light-content" : "dark-content"} 
          backgroundColor={theme.headerColor} 
          translucent={true} 
        />

        {/* Header Section */}
        <View style={[styles.header, { backgroundColor: theme.headerColor }]}>
          <TouchableOpacity onPress={() => setMenuVisible(true)}>
            <Ionicons name="menu" size={28} color={theme.textColor} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setSettingsVisible(true)}>
            <MaterialCommunityIcons name="dots-vertical" size={28} color={theme.textColor} />
          </TouchableOpacity>
        </View>

        {/* Modals */}
        <MenuModal 
          visible={menuVisible} 
          onClose={() => setMenuVisible(false)} 
          onNavigate={handleMenuAction} 
        />
        
        <SettingsModal 
          visible={settingsVisible} 
          onClose={() => setSettingsVisible(false)} 
          onNavigate={(screen) => navigate(screen)}
          isDarkMode={isDarkMode}
          onToggleDarkMode={() => setIsDarkMode(!isDarkMode)}
        />

        {/* Stack Navigator */}
        <Stack.Navigator 
          screenOptions={{ 
            headerShown: true,
            headerStyle: { backgroundColor: theme.headerColor },
            headerTintColor: theme.textColor,
          }}
        >
          <Stack.Screen name="Main" component={MainTabs} options={{ headerShown: false }} />
          <Stack.Screen name="Saved" component={SavedScreen} options={{ title: 'Saved Items' }} />
          <Stack.Screen name="Favourite" component={FavouriteScreen} options={{ title: 'Favourites' }} />
          <Stack.Screen name="Help" component={HelpScreen} options={{ title: 'Help & Support' }} />
          <Stack.Screen name="About" component={AboutScreen} options={{ title: 'About App' }} />
          
          {/* Sabbin Screens da aka kara */}
          <Stack.Screen name="AccountCenter" component={AccountCenterScreen} options={{ title: 'Account Center' }} />
          <Stack.Screen name="Language" component={LanguageScreen} options={{ title: 'Select Language' }} />
          <Stack.Screen name="Privacy" component={PrivacyScreen} options={{ title: 'Privacy Settings' }} />
          <Stack.Screen name="Blocked" component={BlockedScreen} options={{ title: 'Blocked Users' }} />
        </Stack.Navigator>

      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  mainContainer: { 
    flex: 1, 
    marginTop: Platform.OS === 'android' ? 10 : 0 
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingTop: Platform.OS === 'android' ? 35 : 10, 
    paddingBottom: 15,
    zIndex: 10,
  }
});