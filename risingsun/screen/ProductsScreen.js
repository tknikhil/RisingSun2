import { View, Animated } from 'react-native'
import React from 'react'
import { GestureHandlerRootView, PanGestureHandler } from 'react-native-gesture-handler'
import { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue } from 'react-native-reanimated'


const ProductsScreen = () => {
    const animation = useSharedValue(0)

    const gestureHandler = useAnimatedGestureHandler({
      onStart: (event, ctx) => {
        ctx.startX = animation.value
      },
      onActive: (event, ctx) => {
        animation.value = ctx.startX + event.translationX
      },
      onEnd: (event, ctx) => {}
    })
  
    const animatedStyle = useAnimatedStyle(() => {
      return {
        transform: [{ translateX: animation.value }]
      }
    })
  
    return (
      <GestureHandlerRootView style={{ flex: 1 }}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <PanGestureHandler onGestureEvent={gestureHandler}>
            <Animated.View
              style={{
                backgroundColor: 'green',
                elevation: 5,
                width: '100%',
                height: 100
              }}
            >
              <Animated.View
                style={[
                  {
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'white'
                  },
                  animatedStyle
                ]}
              />
            </Animated.View>
          </PanGestureHandler>
        </View>
      </GestureHandlerRootView>
    )
}

export default ProductsScreen