// importing react and react native
import React, { Component } from 'react'
import { View, AppRegistry, ScrollView, StatusBar } from 'react-native'
import { Scene, Router } from 'react-native-router-flux'
// components
import HotelNavigation from './src/components/hotel_navigation'
import Hotel from './src/components/Hotel.js'
import Services from './src/components/Services.js'
import ImageBanner from './src/components/image_banner'
import Row from './src/components/Row.js'
import InfoBox from './src/components/info_box'

import App from './src/App'

const Index = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="hotel-navigation" component={App} title="Hoteles" />
      </Scene>
    </Router>
  )
}

const styles = {
  contentContainer: {
    paddingVertical: 20,
  },
}

// register app
AppRegistry.registerComponent('maxdream', () => Index)
