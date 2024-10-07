// import React, { useState, useEffect } from 'react';
// import { View, FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';
// import axios from 'axios';
// import { Card } from 'react-native-paper';

// const Home = () => {
//   const [products, setProducts] = useState([]); // State for products
//   const [loading, setLoading] = useState(true); // Loading state

//   useEffect(() => {
//     // Fetching data from Fake Store API
//     axios
//       .get('https://fakestoreapi.com/products')
//       .then(response => {
//         setProducts(response.data);
//         setLoading(false);
//       })
//       .catch(error => {
//         console.error('Error fetching data: ', error);
//         setLoading(false);
//       });
//   }, []);

//   // Render each product card
//   const renderProduct = ({ item }) => (
//     <TouchableOpacity style={styles.cardContainer}>
//       <Card style={styles.card}>
//         {/* Ensure the product image is not causing issues */}
//         <Card.Cover source={{ uri: item.image }} />
//         <Card.Content>
//           {/* Wrap title and price inside Text components */}
//           <Text style={styles.title}>{item.title}</Text> 
//           <Text style={styles.price}>${item.price}</Text> 
//         </Card.Content>
//       </Card>
//     </TouchableOpacity>
//   );

//   return (
//     <View style={styles.container}>
//       {loading ? (
//         <Text>Loading...</Text>  
//       ) : (
//         <FlatList
//           data={products}
//           keyExtractor={item => item.id.toString()}
//           renderItem={renderProduct}
//           numColumns={2} // Display in two columns
//           contentContainerStyle={styles.list}
//         />
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 10,
//     backgroundColor: '#f5f5f5',
//   },
//   list: {
//     paddingBottom: 20,
//   },
//   cardContainer: {
//     flex: 1,
//     margin: 10,
//     borderRadius: 10,
//   },
//   card: {
//     elevation: 5, // Shadow effect
//     backgroundColor: 'white',
//     borderRadius: 10,
//     overflow: 'hidden',
//   },
//   title: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color:"black",
//     marginTop: 10,
//   },
//   price: {
//     fontSize: 14,
//     color: '#888',
//     marginTop: 5,
//   },
// });

// export default Home;
import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { Card } from 'react-native-paper';

const Home = () => {
  const [products, setProducts] = useState([]); // State for products
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    // Fetching data from Fake Store API
    axios
      .get('https://fakestoreapi.com/products')
      .then(response => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
        setLoading(false);
      });
  }, []);

  // Render each product card
  const renderProduct = ({ item }) => (
    <TouchableOpacity style={styles.cardContainer}>
      <Card style={styles.card}>
        {/* Card Image */}
        <Card.Cover 
          source={{ uri: item.image }} 
          style={styles.cardImage} // Control image size to be uniform
        />
        <Card.Content>
          <Text style={styles.title}>{item.title}</Text> 
          <Text style={styles.price}>${item.price}</Text> 
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {loading ? (
        <Text>Loading...</Text>  
      ) : (
        <FlatList
          data={products}
          keyExtractor={item => item.id.toString()}
          renderItem={renderProduct}
          numColumns={2} // Display in two columns
          contentContainerStyle={styles.list}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  list: {
    paddingBottom: 20,
  },
  cardContainer: {
    flex: 1,
    margin: 10,
  },
  card: {
    elevation: 5, // Shadow effect
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
    height: 300, // Set fixed height for uniformity
  },
  cardImage: {
    height: 180, // Set image height to make cards uniform
    width: '100%', // Make image cover the entire width of the card
    resizeMode: 'contain', // Ensure image doesn't stretch
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    color:"black",

    paddingHorizontal: 5,
  },
  price: {
    fontSize: 14,
    color: '#888',
    marginTop: 5,
    paddingHorizontal: 5,
  },
});

export default Home;
