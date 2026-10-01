import { FlatList, StyleSheet, Text, View } from 'react-native';

type Product = { id: string; name: string; price: number };

const PRODUCTS: Product[] = [
  { id: '1', name: 'Wireless Earbuds', price: 49.99 },
  { id: '2', name: 'Smart Watch', price: 129.0 },
  { id: '3', name: 'Phone Stand', price: 12.5 },
  { id: '4', name: 'USB-C Charger', price: 24.99 },
  { id: '5', name: 'Bluetooth Speaker', price: 59.0 },
];

export function ProductList() {
  return (
    <FlatList
      data={PRODUCTS}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.list}
      ListEmptyComponent={<Text>No products found.</Text>}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.price}>${item.price.toFixed(2)}</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  list: { padding: 16, gap: 12 },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    borderRadius: 10,
    backgroundColor: '#f2f4f7',
  },
  name: { fontSize: 16 },
  price: { fontSize: 16, fontWeight: 'bold', color: '#1a7f37' },
});
