import { View, Animated, PanResponder, Text, FlatList } from 'react-native';
import React, { useRef } from 'react';

const ProductsScreen = () => {
  const animation = useRef(new Animated.Value(0)).current;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null, { dx: animation }], {
        useNativeDriver: false,
      }),
      onPanResponderRelease: () => {},
    })
  ).current;

  const animatedStyle = {
    transform: [{ translateX: animation }],
  };

  const products = [
    {
      productName: 'Product A',
      productPrice: 10.99,
      productId: 'ABC123',
    },
    {
      productName: 'Product B',
      productPrice: 19.99,
      productId: 'DEF456',
    },
    {
      productName: 'Product C',
      productPrice: 5.99,
      productId: 'GHI789',
    },
  ];

  const renderItem = ({ item }) => (
    <Animated.View
      style={[
        {
          backgroundColor: 'green',
          elevation: 5,
          width: '100%',
          height: 100,
          marginBottom: 20,
        },
      ]}
      {...panResponder.panHandlers}
    >
    
      <Animated.View
        style={[
          {
            width: '100%',
            height: '100%',
            backgroundColor: 'white',
          },
          animatedStyle,
        ]}
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>
            <Text style={{ fontWeight: 'bold' }}>Product Name: </Text>
            {item.productName}
          </Text>
          <Text>
            <Text style={{ fontWeight: 'bold' }}>Product Price: </Text>
            ${item.productPrice}
          </Text>
          <Text>
            <Text style={{ fontWeight: 'bold' }}>Product ID: </Text>
            {item.productId}
          </Text>
        </View>
      </Animated.View>
    </Animated.View>
  );

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default ProductsScreen;