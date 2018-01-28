// importing react and react native
import React from 'react'
import { View, AppRegistry } from 'react-native'

// components
import ImageBanner from './src/components/image_banner'

const App = () => {
  return (
    <View>
      <ImageBanner image={require('./src/assets/img/bannerImage.png')} />
    </View>
  )
}

// register app
AppRegistry.registerComponent('maxdream', () => App)
