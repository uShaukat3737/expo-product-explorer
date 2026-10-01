import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Expo Product Explorer</Text>
      <Text style={styles.name}>Muhammad Usman Shaukat</Text>
      <Text style={styles.roll}>Roll No: 23i-3016</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  name: {
    fontSize: 18,
  },
  roll: {
    fontSize: 16,
    color: '#555',
  },
});
