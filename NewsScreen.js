import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const NewsScreen = () => (
  <View style={styles.container}>
    {/* Stories Section */}
    <View style={{ height: 100 }}>
       <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {[1,2,3,4,5].map(i => (
            <View key={i} style={styles.storyCircle}><Text>Story</Text></View>
          ))}
       </ScrollView>
    </View>
    {/* Posts Section */}
    <ScrollView>
       <View style={styles.post}><Text>Public Post / Media</Text></View>
       <View style={styles.post}><Text>Institution Update</Text></View>
    </ScrollView>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  storyCircle: { width: 70, height: 70, borderRadius: 35, backgroundColor: '#ddd', margin: 10, justifyContent: 'center', alignItems: 'center' },
  post: { height: 300, backgroundColor: '#f9f9f9', marginVertical: 10, justifyContent: 'center', alignItems: 'center' }
});

export default NewsScreen;