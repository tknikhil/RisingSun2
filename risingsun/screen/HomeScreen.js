import { View, useState,useRef, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Animated, { timing } from 'react-native-reanimated';

const HomeScreen = () => {
    const [showMenu,setShowMenu]=useState(false);
    const moveToRight=useRef(new Animated.Value(1)).current;
    const scale = useRef(new Animated.Value(0)).current;
  return (
    <Animated.View style={{
        flex:1,
        backgroundColor:'#f5f5f5',
        position:'absolute',
        left:0,
        right:0,
        bottom:0,
        top:0,
        transform:[{scale:scale},{translateX:moveToRight}]
        }}>  
      <View style={{flexDirection:'row',marginTop:50}}>
        <TouchableOpacity style={{marginLeft:20}} onPress={()=>{
            Animated.timing(scale,{
                toValue:showMenu?1:0.8,
                duration:300,
                useNativeDriver:true
            }).start();
            Animated.timing(moveToRight,{
                toValue:showMenu?0:230,
                duration:300,
                useNativeDriver:true
            }).start();
        }}>
            <Image source={require('../images/menu.png')} style={{width:50,height:50}}/>
        </TouchableOpacity>
      </View>
    </Animated.View>
  )
}

export default HomeScreen