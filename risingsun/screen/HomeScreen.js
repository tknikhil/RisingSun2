import {
  View,
  TouchableOpacity,
  Image,
  Animated,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
} from 'react-native';
import React, {useState, useRef} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import ProductsScreen from './ProductsScreen';
import CustomersScreen from './CustomersScreen';
import  Reanimated  from 'react-native-reanimated';
// import { timing,Value } from 'react-native-reanimated';

const HomeScreen = ({navigation}) => {
  const [showMenu, setShowMenu] = useState(false);
  const moveToRight = useRef(new Animated.Value(1)).current;
  const scale = useRef(new Animated.Value(1)).current;
  const [selectedMenuItem, setSelectedMenuItem] = useState(0);
  const menu = [
    {icon: require('../assets/images/home.png'), title: 'Home'},
    {icon: require('../assets/images/product.png'), title: 'Products'},
    {icon: require('../assets/images/customer.png'), title: 'Customers'},
    {icon: require('../assets/images/logout.png'), title: 'Logout'},
  ];
  const renderSelectedScreen = () => {
    switch (menu[selectedMenuItem].title) {
      case 'Products':
        return <Reanimated><ProductsScreen /></Reanimated>; // Render the ProductsScreen component for the 'Products' menu item
      case 'Customers':
        return <CustomersScreen />; // Render the CustomersScreen component for the 'Customers' menu item
      // Add cases for other menu items as needed
      default:
        return null;
    }
  };
  return (
    <LinearGradient
      colors={['#00AFF0', '#0077a4']} // Replace with your desired gradient colors
      style={{flex: 1}}>
      <View style={{flex: 1}}>
        {/* Menu Design */}
        {avatar()}
        {menuItem()}
        {drawer()}
      </View>
    </LinearGradient>
  );

  function avatar() {
    return (
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 30,
        }}>
        <Image
          source={require('../assets/images/person.png')}
          style={{
            width: 70,
            height: 70,
            borderRadius: 35,
            marginLeft: 20,
            backgroundColor: 'white',
            borderWidth: 3,
            borderColor: 'grey',
          }}
        />
        <View style={{marginLeft: 10}}>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
            Nidhish TK
          </Text>
          <Text style={{fontSize: 15, color: 'white'}}>Sales</Text>
        </View>
      </View>
    );
  }

  function menuItem() {
    return (
      <View style={{marginTop: 30}}>
        <FlatList
          data={menu}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                style={{
                  width: 200,
                  // height: 10,
                  marginLeft: 20,
                  marginTop: 20,
                  backgroundColor: selectedMenuItem === index ? '#fff' : null,
                  borderRadius: 10,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
                onPress={() => {
                  setSelectedMenuItem(index);

                  //  navigation.navigate(menu[selectedMenuItem].title);
                  console.log(item.title);
                  // console.log(setSelectedMenuItem(index));
                }}>
                <Image
                  source={item.icon}
                  style={{
                    width: 24,
                    height: 24,
                    marginLeft: 10,
                    tintColor: selectedMenuItem === index ? '#000' : '#fff',
                  }}
                />
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: '800',
                    marginLeft: 15,
                    color: selectedMenuItem === index ? '#000' : '#fff',
                  }}>
                  {item.title}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    );
  }

  function drawer() {
    return (
      <Animated.View
        style={{
          flex: 1,
          backgroundColor: '#f5f5f5',
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          top: 0,
          transform: [{scale: scale}, {translateX: moveToRight}],
          borderRadius: showMenu ? 15 : 0,
        }}>
        <View style={{flexDirection: 'row', marginTop: 30}}>
          <TouchableOpacity
            style={{marginLeft: 20}}
            onPress={() => {
              Animated.timing(scale, {
                toValue: showMenu ? 1 : 0.8,
                duration: 200,
                useNativeDriver: true,
              }).start();
              Animated.timing(moveToRight, {
                toValue: showMenu ? 0 : 230,
                duration: 200,
                useNativeDriver: true,
              }).start();
              setShowMenu(!showMenu);
            }}>
            <Image
              source={require('../assets/images/menu.png')}
              style={{width: 30, height: 30}}
            />
          </TouchableOpacity>
          <Text style={{marginLeft: 20, fontSize: 20, fontWeight: '800'}}>
            {menu[selectedMenuItem].title}
          </Text>
        </View>
        {screenCall()}
      </Animated.View>
    );
    function screenCall() {
      return (
        <View
          style={{
            width: '100%',
            height: '100%',
            borderBottomLeftRadius: showMenu ? 15 : 0,
          }}>
          {renderSelectedScreen()}
        </View>
      );
    }
  }
};

export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
