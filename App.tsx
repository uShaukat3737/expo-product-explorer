import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ProductList } from './components/ProductList';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Expo Product Explorer</Text>
        <Text style={styles.name}>Muhammad Usman Shaukat</Text>
        <Text style={styles.roll}>Roll No: 23i-3016</Text>
      </View>
      <ProductList />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
    paddingTop: 48,
    paddingBottom: 8,
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
