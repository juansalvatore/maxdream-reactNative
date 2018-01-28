// importing react and react native
import React from 'react'
import { View, AppRegistry } from 'react-native'

// components
import ImageBanner from './src/components/image_banner'
import InfoBox from './src/components/info_box'

const App = () => {
  return (
    <View>
      <ImageBanner image={require('./src/assets/img/bannerImage.jpg')} />
      <InfoBox image={require('./src/assets/img/infoBox.jpg')} />
    </View>
  )
}

// register app
AppRegistry.registerComponent('maxdream', () => App)
